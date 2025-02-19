import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"

const Header = () => {
    const [login, setLogin] = useState("Login");
    console.log("Header rendered");

    // if the dependency array is empty use effect is called only in the initial render 
    // if there is dependnecy then useEffect hook will be called only when the dependecy changes
   
    return (
        <div className="header">
            <div className="logo-container">
             <Link to="/"> <img className="logo" src= {LOGO_URL} /></Link>  
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => (
               
                        login === "Login" ? setLogin("Logout") : setLogin("Login")
                    
                    
                    )}>{login}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;