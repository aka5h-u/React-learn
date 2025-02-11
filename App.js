import React from "react";
import ReactDOM from "react-dom/client";

import logo from './public/logo.jpeg';
import usericon from './public/usericon.png'
const root = ReactDOM.createRoot(document.getElementById("root"));


const HeaderComponent = () => (
    <div id="header">
        <img src= {logo} className="logo" />
        <input className="search" type="text" placeholder="Search" />
        <img src= {usericon} className="usericon" />
    </div>
    
)







const titleElement = (
    <div className="title">
        <h1>Title of the page</h1>
        <h2>Sub title of the page</h2>
        <h3>Lorem isum </h3>

    </div>

)

const TitleComponent = () => (
    <div className="title">
        <h1>Title of the page</h1>
        <h2>Sub title of the page</h2>
        <h3>Lorem isum </h3>
        {titleElement}

    </div>
)

root.render(<HeaderComponent />)
//root.render(titleElement)
//root.render(<TitleComponent/>)