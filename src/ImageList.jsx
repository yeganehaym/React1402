import {Component} from "react";
import Image from "./Image";
import ReactCountryFlag from "react-country-flag";
import WorldMap from "react-svg-worldmap";

export default class ImageList extends Component{

    state={
        images:[
            {url:'images/1.jfif',rate:3},
            {url:'images/2.jfif',rate:1},
            {url:'images/3.jfif',rate:5},

        ],
        data:[{country: "cn", value: 1389618778},{country: "ir", value: 5000000},{country: "us", value: 200000},
            {country: "ch", value: 35000000},{country: "in", value: 100000},{country: "uk", value: 600000}]
    }
    render() {
        return (
            <div>

                {
                    this.state.images.map(image=><Image image={image} />)
                }
                <ReactCountryFlag countryCode="CN" svg />

                <WorldMap
                    color="red"
                    title="Top 10 Populous Countries"
                    value-suffix="people"
                    size="lg"
                    data={this.state.data}
                />
            </div>
        );
    }
}