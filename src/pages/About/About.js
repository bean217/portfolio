import React from 'react';
import './About.css';

// Assets
import benpic from '../../assets/benpiro.png';
import ritlogo from '../../assets/RIT_seal.png';
import ritcsh from '../../assets/rit_csh.png';
import carestream from '../../assets/carestream.png';
import crossmen from '../../assets/crossmen-productions-logo.jpg';

// Hooks
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';

const Landing = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const navHeight = document && document.getElementById("nav") && document.getElementById("nav").offsetHeight;
    return (
        <div 
            className="landing-container" 
            style={{
                height: `${windowSize.height - navHeight}px`,
                opacity: `${1 - (scrollPosition / windowSize.height)}`,
                backgroundColor: "red"}}>
            <div className="landing">
                <div className="landingphoto landingitem"><img src={benpic} alt=""></img></div>
                <div className="landingname landingitem">Benjamin Piro</div>
                <div className="landingtext landingitem">Software Engineering Intern at Carestream Health, Inc. - Undergraduate Student in Computer Science</div>
            </div>
        </div>
    );
};

const LandingExperience = () => {
    return (
        <div className="landingexperience">
            <div className="rit"><img src={ritlogo} alt=""></img></div>
            <div className="csh"><img src={ritcsh} alt=""></img></div>
            <div className="crossmen"><img src={crossmen} alt=""></img></div>
            <div className="carestream"><img src={carestream} alt=""></img></div>
        </div>
    );
};

const About = () => {
    console.log("About render");
    return (
        <div>
            <Landing/>
            <LandingExperience/>
        </div>
    );
};

export default About;