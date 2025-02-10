import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    'h1', 
    {id:"heading"}, 
    "Hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


/**
 * 
 *  <div id =parent>
 *      <div id="child">
 *          <h1> I am h1 </h1>
 *       </div>
 * </div>
 * 
 * 
 * 
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            'h1',
            {},
            "I am a h1 tag"
        ), React.createElement('h2',
            {},
            "I am a h2 tag"
        ),
        React.createElement('h3',
            {},
            "This is a h3 tag"
        )]
    )
);

console.log(parent)
const body = ReactDOM.createRoot(document.querySelector("body"));
root.render(parent)