import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [login, setLogin] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
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