import React from "react";
import ReactDOM from "react-dom/client";


//jsx is not html inside javascript it is html like syntax

/**
 * How jsx works
 * JSX is not javascript for the engine to understand
 * JSx is first transpiled by Babel to React.createElement which is then converted to JS Object which is rendered as HTML
 */

//giving attributes in jsx requires camelcase 
//this is a react element
const heading = (<h1 id="heading" className="head">This is heading from JSX</h1>);


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

//react based component 
/**
 * There are 2 wawys to create a react component 
 *  FUnction based react component --> This is widely used in modern practises
 * Class based react component 
 */

//react functional component - start with capital letter
/**
 *  function component is a js function that returns jsx or react element
 *  
 */

const Title = () => (
    <h1>This is the title of the component</h1>
)

const title2 = (
    <h2>THis is a react element</h2>
)
//can put regular javascript inside jsx
const num = 500;
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {title2}
        <h2>{num}</h2> 
        <h1>Heading component </h1>

    </div>
);

//another way of writing
const Heading2 = () => (<h1>Another functional compponent</h1>);

root.render(< HeadingComponent />);