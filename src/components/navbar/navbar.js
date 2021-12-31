import React from "react";
import './Navbar.css'

function Element(props) {
    return (<div className="nav-element text">{props.name}</div>);
}

function Navbar(props) {
    const titleName = props.title.split(' ');
    const fname = (<span style={{color: '#ef5951'}}>{titleName[0]}</span>);
    const lname = (<span>{titleName[1]}</span>);
    return (
        <div className="nav-container noselect">
            <div className="title text"><span >{fname} {lname}</span></div>
            <div className="nav-elements">
                <Element name="About"/>
                <Element name="Projects"/>
                <Element name="Experience"/>
                <Element name="Extra"/>
                <Element name="GitHub"/>
            </div>
            
        </div>
    );
}

export default Navbar;