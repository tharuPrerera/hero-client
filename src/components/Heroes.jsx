import React, {Component} from "react";
import Hero from "./Hero";

class Heroes extends Component{
    state = {
        allAvengers: [
            {id: 1, likeCount: 5},
            {id: 2, likeCount: 10},
            {id: 3, likeCount: 15}, 
        ],
    };
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Hero />
                    </div>
                    <div className="col">
                        <Hero />
                    </div>
                    <div className="col">
                        <Hero />
                    </div>
                </div>
            </div>
        );
    }
}

export default Heroes;