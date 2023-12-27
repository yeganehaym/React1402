import {Component} from "react";

export class List extends Component{

    state={
        notes:['apple','orange','rice','banana','kiwi'],
        value:'test'
    }

    updateValue=(event)=>{
        const mystate={...this.state};
        mystate.value=event.target.value
        this.setState(mystate);
    }

    add=()=>{
        const mystate={...this.state};
        mystate.notes.push(mystate.value);
        
        this.setState(mystate);
    }
    render() {
        return(
           <>
               <input type={"text"} value={this.state.value}
                      onInput={event => this.updateValue(event)
                           } />
               <button onClick={this.add}>Add</button>
               <ul>
                   {
                       this.state.notes.map(n=><li>{n}</li>)
                   }
               </ul>
           </>
        )
    }
}