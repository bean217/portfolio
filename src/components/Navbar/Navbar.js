import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Assets
import logo from '../../assets/logo.png';
import logo_invert from '../../assets/logo_invert.png';
import nav_drop_down from '../../assets/nav_drop_down.png';
import nav_drop_down_invert from '../../assets/nav_drop_down_invert.png';

function Title() {
    const [isTitleHover, setIsTitleHover] = useState(false);
    const titleLogo = (<img className="icon text" src={isTitleHover ? logo_invert : logo} alt=''></img>);
    return (
        <div className="title"
                onMouseEnter={() => setIsTitleHover(true)}
                onMouseLeave={() => setIsTitleHover(false)}>
                <Link to="/"><div>{titleLogo}</div></Link>
        </div>
    );
}

function DropDown() {
    const [isDropDownHover, setIsDropDownHover] = useState(false);
    const dropdownicon = (<img className="icon text" src={isDropDownHover ? nav_drop_down_invert : nav_drop_down} alt=''></img>);
    return (
        <div className="dropdown"
            onMouseEnter={() => setIsDropDownHover(true)}
            onMouseLeave={() => setIsDropDownHover(false)}>
            <div>{dropdownicon}</div>
            <div className="dropdown-content">
                <Link to="/"><Element name="About"/></Link>
                <Link to="/projects"><Element name="Projects"/></Link>
                <Link to="/experience"><Element name="Experience"/></Link>
                <Link to="/extra"><Element name="Extra"/></Link>
            </div>
        </div>
    );
}

function Element(props) {
    return (<div className="nav-element text">{props.name}</div>);
}

function useNavbar() {
    console.log("Navbar render");
    return (
        <nav id="nav">
            <div className="nav-container-desktop noselect">
                <Title />
                <div className="nav-elements">
                    <Link to="/"><Element name="About"/></Link>
                    <Link to="/projects"><Element name="Projects"/></Link>
                    <Link to="/experience"><Element name="Experience"/></Link>
                    <Link to="/extra"><Element name="Extra"/></Link>
                </div>
            </div>
            <div className="nav-container-mobile noselect">
                <Title />
                <DropDown />
            </div>
        </nav>
    );
}

export default useNavbar;