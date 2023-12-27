import {Component} from "react";
import RatingBar from "./RatingBar";

export default class Image extends Component{

    render() {
        return (
            <div style={{marginTop:"25px",marginBottom:'10px'}}>
                <img src={this.props.image.url} />
                <RatingBar count={5} rate={this.props.image.rate} readonly={false} />
            </div>
        );
    }
}