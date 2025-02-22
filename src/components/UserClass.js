import React from "react";

class UserClass extends React.Component {
    constructor(props){
        //console.log(this.props.name + "child component constructor");
        super(props);
        //console.log(props.name);
        this.state = {
            userInfo :{
                name:"dummy",
                avatar_url :"xyz@xyz.com"
            }
        }
        
    }   
        async componentDidMount(){
            //console.log(this.props.name + "child component mounted");
            
                const data = await fetch(`https://api.github.com/users/aka5h-u`);
                const json = await data.json();
                console.log(json)
                this.setState({
                    userInfo:json,
                });
            
          
        }
    
        render(){
            //console.log(this.props.name + "child component rendered");
            const {name, avatar_url } = this.state.userInfo;

            return(
                <div className="user-card">
                        <h2>Name : {name}</h2>
                        <img src={avatar_url} className="avatar" alt="avatar"/>
                        <h3>Location : Bangalore</h3>
                        <h4>Contact: xyz@xyz.com</h4>
                </div>
            )
        }
}

export default UserClass; 