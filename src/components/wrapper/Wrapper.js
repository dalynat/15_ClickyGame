import React from "react";
import "./Wrapper.css";

// Included a wrapper to help with image spacing
const Wrapper = props => 
    <div className="wrapper">
        {props.children}
    </div>;


export default Wrapper;