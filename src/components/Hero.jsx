import React, {Component} from "react";

class Hero extends Component{
    state ={heroId: 185};
    render(){
        return (
            <React.Fragment>
                <h1>Avenger Incoming...</h1>
        <button>Click Here {this.state.heroId}</button>
            </React.Fragment>
        );
    }
}

export default Hero;