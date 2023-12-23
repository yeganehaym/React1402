import {Component} from "react";
import './RatingBar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class RatingBar extends Component{

    state={
        rateCount:this.props.count??5,
        rate:this.props.rate??0,
        readonly:this.props.readonly??false
    }

    setRate=rate=>{
        if(this.state.readonly===true)
            return;

        const clone={...this.state};
        clone.rate=rate;
        this.setState(clone);

        this.props.onRateSet({rate,rateCount: this.state.rateCount})

    }

    createStar=(star)=>{
        return <i onClick={()=>this.setRate(star)}
                  className={(star<=this.state.rate?"fa fa-star":"fa-regular fa-star")
                      + " yellow " + (this.state.readonly?"disabled":"")} ></i>
    }

    makeStars=()=>{


        let array=[];
        for (var i=0;i<this.state.rateCount;i++)
        {
            array.push(i+1);
        }

        return(<>
            {array.map(star=> this.createStar(star))}
        </>)

    }

    render() {
        return(<>

                {
                    this.makeStars()
                }

                <ToastContainer />
            </>
        )
    }
}