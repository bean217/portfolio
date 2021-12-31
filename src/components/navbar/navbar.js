import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Title() {
    
}

function Element(props) {
    return (<div className="nav-element text">{props.name}</div>);
}

function Navbar(props) {
    const [isTitleHover, setIsTitleHover] = useState(false);
    const titleName = props.title.split(' ');
    const fname = (<span style={isTitleHover ? {} : {color: '#ef5951'}}>{titleName[0]}</span>);
    const lname = (<span style={isTitleHover ? {color: '#ef5951'} : {}}>{titleName[1]}</span>);
    return (
        <div className="nav-container noselect">
            <div className="title text"
                onMouseEnter={() => setIsTitleHover(true)}
                onMouseLeave={() => setIsTitleHover(false)}>
                <Link to="/"><div><span >{fname} {lname}</span></div></Link>
            </div>
            <div className="nav-elements">
                <Link to="/"><Element name="About"/></Link>
                <Link to="/projects"><Element name="Projects"/></Link>
                <Link to="/experience"><Element name="Experience"/></Link>
                <Link to="/extra"><Element name="Extra"/></Link>
                <Link to="/github"><Element name="GitHub"/></Link>
            </div>
            
        </div>
    );
}

export default Navbar;