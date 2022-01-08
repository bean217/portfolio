import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Assets
import logo from '../../assets/logo.png';
import logo_invert from '../../assets/logo_invert.png';

function Title(props) {
    const [isTitleHover, setIsTitleHover] = useState(false);
    const titleLogo = (<img className="icon" src={isTitleHover ? logo_invert : logo}></img>);
    return (
        <div className="title text"
                onMouseEnter={() => setIsTitleHover(true)}
                onMouseLeave={() => setIsTitleHover(false)}>
                <Link to="/"><div>{titleLogo}</div></Link>
        </div>
    );
}

function Element(props) {
    return (<div className="nav-element text">{props.name}</div>);
}

function Navbar() {
    return (
        <nav>
            <div className="nav-container noselect">
                <Title title="Benjamin Piro" />
                <div className="nav-elements">
                    <Link to="/"><Element name="About"/></Link>
                    <Link to="/projects"><Element name="Projects"/></Link>
                    <Link to="/experience"><Element name="Experience"/></Link>
                    <Link to="/extra"><Element name="Extra"/></Link>
                    <a href='https://github.com/bean217'><Element name="GitHub"/></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;