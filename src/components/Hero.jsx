import React, {Component} from "react";

class Hero extends Component{
    state ={
        heroId: 185, 
        movies: ["Movie 1","Movie 2","Movie 3"],
        likecount: 0,
    };
    render(){
        return (
        <div className="card" style={{width: "18rem"}}>
            <img src="http://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Avenger Name</h5>
              <h6>Avenger Birth Name</h6>
              <ul>{this.showMovies()}</ul>
              <button className="btn btn-info" onClick={() => {this.likeAvenger(1)}}>
                Like <samp className="badge badge-light">{this.state.likecount}</samp>
              </button>
            </div>
        </div>

            /*<React.Fragment>
              <h1 style={{width:"100rem",fontSize: "98px"}}>
                    Avenger Incoming...
                </h1>
                <h2>{this.isHero()}</h2>
                <button type="button" className="btn btn-primary">
                    Click an Avenger
                </button>
                <button>Click Here {this.state.heroId}</button>       
                
            </React.Fragment>*/
        );
    }
    isHero(){ 
        //logic check using funtion..
        //if(this.state.heroId < 0) return "Note an avenger";
        ///else return "Is an avenger";
        
        //same thing short writting..
        return this.state.heroId < 0 ? "Note an avenger" : "Is an avenger";
    }

    showMovies(){
        //return li element for every valu inside 'movie' arra
       
       if(this.state.movies.length === 0) return <p>No movies available</p>;
        return this.state.movies.map((movie) => (
           // <li key={this.state.movies.indexOf(movie)}>{movie}</li>
           <li key={movie}>{movie}</li>
        ));
    }
    //arror funtion
    likeAvenger = (likeCounter) =>{
       // console.log("You have like this Avenger!");
       //console.log(this.state.likecount++);

       this.setState({likecount: this.state.likecount + likeCounter});
    }

}

export default Hero;