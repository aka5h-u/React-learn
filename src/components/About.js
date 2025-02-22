import UserClass from "./UserClass";
import { Component } from "react";

/*
const About = () => {
    return(
        <div className="about-container">
            <h1>About US</h1>
            <h2>More info is not available at the moment</h2>
            <UserClass name={"Akash from classes"}/>

        </div>
    )
}

export default About;

*/
class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="about-container">
            <h1>About US</h1>
            <h2>More info is not available at the moment</h2>
            <UserClass name={"Akash from classes"}/>

        </div>
    )
    }

}

export default About;