//import './MusicPlayer.css'
import {useEffect, useRef, useState} from "react";
export const MusicPlayer=props=>{

    const [song,setSong]=useState('demo2.mp3');
    const [audio,setAudio]=useState(new Audio());
    const [duration,setDuration]=useState(0);
    const [playTime,setPlayTime]=useState(0)
    const [progress,setProgress]=useState();
    const getTime=s=>{
        const minutes=parseInt(s/60);
        const seconds=parseInt(s%60);
        return `${(minutes<10?"0":"") + minutes}:${(seconds<10?"0":"") + seconds}`;
    }

    const getPercent=(au)=>{
        const total=au.duration;
        const current=au.currentTime;
        const percent=current*100/total;
        setProgress(percent);
    }
    useEffect(()=>{
        const au=new Audio(song);
        au.autoplay=false;
        au.onloadedmetadata=ev=>{
            const dur=au.duration;
            setDuration(dur)
        }


        au.ontimeupdate=ev => {
            const playedTime=au.currentTime;
            setPlayTime(playedTime);
            getPercent(au)
        }

        setAudio(au);
    },[])

    const play=()=>{
        if(audio.paused)
        {
            audio.play();
        }
        else{
            audio.pause();
        }
    }

    const seek=(e)=>{

        const rect=progressControl.current.getBoundingClientRect();
        const clickPos = (e.clientX - rect.left) ;

        const total=rect.width;
        const percentage=clickPos*100/total;

       const time=percentage*duration/100;

        audio.currentTime=time;
    }
    const progressControl=useRef(null);
    return (<>
        <div className="media-controls">
            <div className="media-buttons">


                <button onClick={()=>audio.currentTime-=5} className="rewind-button media-button" label="rewind">
                    <i className="fas fa-backward button-icons"></i>
                    <span className="button-text milli">Rewind</span>
                </button>

                <button onClick={play} className="play-button media-button" label="play">
                    <i className={audio.paused?"fas fa-play button-icons delta":"fas fa-pause button-icons delta"}></i>
                    <span className="button-text milli">Play</span>
                </button>

                <button onClick={()=>audio.currentTime+=5} className="fast-forward-button media-button" label="fast forward">

                    <i className="fas fa-forward button-icons"></i>
                    <span className="button-text milli">Forward</span>
                </button>


            </div>
            <div ref={progressControl} className="media-progress">
                <div onClick={seek}  className="progress-bar-wrapper progress" style={{cursor:'pointer'}}>
                    <div   className="progress-bar" style={{width:progress + '%'}}>
                    </div>
                </div>
                <div className="progress-time-current milli">
                    {getTime(playTime)}
                </div>
                <div className="progress-time-total milli">
                    {getTime(duration)}
                </div>
            </div>
        </div>
    </>)
}