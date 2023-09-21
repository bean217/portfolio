import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Components
import SkillPanel from "../../components/SkillPanel/SkillPanel";

// Assets
import benpic from '../../assets/benpiro.png';
import desc_benpic from '../../assets/desc_benpic.jpg';
import ritlogo from '../../assets/RIT_seal.png';
import ritcsh from '../../assets/rit_csh.png';
import carestream from '../../assets/carestream.png';
import crossmen from '../../assets/crossmen-productions-logo.jpg';
import cbyx from '../../assets/cbyx_banner.png'

// Data
import { SkillsData } from '../../data/about_data';

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
                <div className="landingtext landingitem">Graduate Student in Computer Science with a Focus in AI/ML</div>
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
            <div className="cbyx"><img src={cbyx}></img></div>
        </div>
    );
};

const Description = () => {
    return (
        <div className="description-container">
            <div className="description">
                <div className="description-assets">
                    <div className="description-photo description-item"><img src={desc_benpic} alt=""></img></div>
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
                    <div className="name">Benjamin Piro</div>
                    <br/>
                    <div className="education">RIT '25, Computer Science BSc/MSc Student, Software Engineer, and Musician</div>
                    <div className="text">I am a current graduate student at the Rochester Institute of Technology and 
                        I have a deep passion for both computer science and music. My interests included
                        software development, computational mathematics, and machine
                        learning. In my leisure, I enjoy performing as a tubist in the RIT Philharmonic
                        Orchestra and participating as a member and section leader of The Cadets Drum
                        &amp; Bugle Corps tuba section.</div>
                    <br/>
                    <div className="text">I am currently participating as a student foreign diplomat in Germany as 
                        part of the 40th cohort of the Parlamentarisches Patenschafts-Programm. In my time abroad in Germany,
                        I have studied German language up to a B1 proficiency at the Carl Duisberg Centrum in Köln, and
                        I am currently studying for a semester in the Mathematics for Data &amp; Resource Science MSc program
                        at the Technische Universität Bergakademie Freiberg in Freiberg, Sachsen. I am actively looking for
                        internships to take my software engineering and machine learning knowledge and skills to the next level.
                    </div>
                    <br/><br/>
                    <div className="education">Rochester Institute of Technology (RIT)</div>
                    <ul className="education-list">
                        <li className="bold">Dual BSc/MSc Degree in Computer Science</li>
                        <li className="bold">Immersion in German Language &amp; Culture</li>
                        <li className="regular">Alumnus of Computer Science House</li>
                        <li className="regular">
                            Outstanding Undergraduate Scholar Award Recipient (awarded to the top 1% undergraduate students at RIT)
                        </li>
                        <li className="regular">
                            Parlamentarisches Patenschafts-Programm Fellow 40th Cohort    
                        </li>
                    </ul>
                    <br/><br/>
                    <div className="education">Universität Osnabrück (UOS) - Study Abroad</div>
                    <ul className="education-list">
                        <li className="bold">2023 Summer Semester in Cognitive Science BSc</li>
                        <li className="regular">Artificial Intelligence, Machine Learning, and Computational Linguistics Focus</li>
                    </ul>
                    <br/><br/>
                    <div className="education">Parlamentarisches Patenschafts-Programm Fellow 40th Cohort</div>
                    <ul className="education-list">
                        <li className="regular">Carl Duisberg Centrum Köln, B1 German Proficiency</li>
                        <li className="regular">Technische Universität Bergakademie Freiberg, Mathematics for Data &amp; Resource Science MSc</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const len = SkillsData.length;
    return (
        <div className="skills-container">
            <div className="skills-title">I Have A Growing Skillset</div>
            <div className="skills-panels">
                {SkillsData.map(function (item) {
                    return <SkillPanel skillData={item}/>
                })}
            </div>
            
        </div>
    );
};

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-title">Want to learn more?</div>
            <div className="resume-items">
                <div className="button"><Link to="/projects"><div className="text">Projects</div></Link></div>
                <div className="button"><Link to="/experience"><div className="text">Experience</div></Link></div>
                <div className="button"><Link to="/extra"><div className="text">Extra Info</div></Link></div>
                <div className="button">
                    <a 
                        href="https://drive.google.com/file/d/1dAw55KFH_yrIPrpWeUQ6MTTBWtt-4AL2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text link">
                        <div className="far fa-file-pdf"></div> My Resume
                    </a>
                </div>
            </div>
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
            <br/><br/>
            <Resume/>
        </div>
    );
};

export default About;