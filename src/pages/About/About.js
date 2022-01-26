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
    const opacity = 1;//1 - (scrollPosition / windowSize.height);
    return (
        <div 
            className="landing-container" 
            style={{
                height: `${windowSize.height - navHeight}px`,
                opacity: `${opacity}`,
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

const Description = () => {
    return (
        <div className="description-container">
            <div className="description">
                <div className="description-assets">
                    <div className="description-photo description-item"><img src={benpic} alt=""></img></div>
                    <div className="description-icons-wrapper">
                        <div className="description-icon">
                            <a 
                                href="https://www.facebook.com/saikofilms" 
                                rel="noreferrer" 
                                className="fa fa-facebook" 
                                target="_blank" >
                            </a>
                        </div>
                        <div className="description-icon">
                            <a 
                                href="https://www.linkedin.com/in/benjamin-piro-38427a195/"
                                rel="noreferrer" 
                                className="fa fa-linkedin" 
                                target="_blank" >
                            </a>
                        </div>
                        <div className="description-icon">
                            <a 
                                href="https://github.com/bean217" 
                                rel="noreferrer" 
                                className="fa fa-github" 
                                target="_blank" >
                            </a>
                        </div>
                    </div>
                </div>
                <div className="description-text">
                    <div className="name"><span>Benjamin Piro</span></div>
                    <div className="education"><span>RIT '24, Computer Science Student, Software Engineer, and Musician</span></div>
                    <span className="text">I am a current undergraduate student at the Rochester Institute of Technology and 
                        I have a deep passion for both computer science and music. My interests included
                        software development, computational mathematics, artificial intelligent, and machine
                        learning. In my leisure, I enjoy performing as a tubist in the RIT Philharmonic
                        Orchestra and participating as a member and section leader of The Cadets Drum
                        &amp; Bugle Corps tuba section.</span>
                    <br/>
                    <span className="text">I am currently working as a software engineer intern at Carestream Health, Inc. as a member
                        of their ImageView team. This team is responsible for developing and maintaining the user
                        interfaces used on Carestream's suite of X-ray machines.
                    </span>
                    <div className="education"><span>Rochester Institute of Technology (RIT)</span></div>
                    <ul className="education-list">
                        <li><b>Bachelor of Science in Computer Science</b></li>
                        <li><b>Immersion in German Language &amp; Culture</b></li>
                        <li>Alumnus of Computer Science House</li>
                        <li>Outstanding Undergraduate Scholar Award Recipient (awarded to the top 1% undergraduate students at RIT)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="skills-container">
            Skills Container
        </div>
    );
};

const Resume = () => {
    return (
        <div className="resume-container">
            Resume Container
        </div>
    );
};

const About = () => {
    console.log("About render");
    return (
        <div>
            <Landing/>
            <LandingExperience/>
            <Description/>
            <Skills/>
            <Resume/>
        </div>
    );
};

export default About;