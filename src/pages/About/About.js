import React from 'react';
import './About.css';

// Assets
import benpic from '../../assets/benpiro.png';

// Hooks
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';

const About = () => {
    console.log("About render")
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const navHeight = document && document.getElementById("nav") && document.getElementById("nav").offsetHeight;
    return (
        <div>
            <div 
                className="landing" 
                style={{
                    height: `${windowSize.height - navHeight}px`,
                    opacity: `${1 - (scrollPosition / windowSize.height)}`,
                    backgroundColor: "red"}}>
                <img className="landingphoto" src={benpic} alt=""></img>        
            </div>
            <div  
                style={{
                    height: "100vh"}}>
                ScrollPosition: {scrollPosition}<br></br>
                NavHeight: {navHeight}
            </div>
        </div>
    );
};

export default About;