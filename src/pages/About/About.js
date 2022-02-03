import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Components
import SkillPanel from "../../components/SkillPanel/SkillPanel";

// Assets
import benpic from '../../assets/benpiro.png';
import ritlogo from '../../assets/RIT_seal.png';
import ritcsh from '../../assets/rit_csh.png';
import carestream from '../../assets/carestream.png';
import crossmen from '../../assets/crossmen-productions-logo.jpg';
import resume_pdf from '../../pdfs/Resume1Sep2021.pdf';

// Hooks
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';

const SkillsData = [
    {
        icon: "fas fa-bookmark",
        title: "C Programming Language",
        description: "The majority of my experience stems from a \
        course I took called Mechanics of Programming. I have an \
        ongoing side project in C using the NCurses library to \
        create a terminal ASCII UI for interacting with a Conway's \
        Game of Life simulator."
    },
    {
        icon: "fas fa-bookmark",
        title: "Java Programming Language",
        description: "Java is a language often used in undergraduate \
        programming courses at RIT. Most of my experience in Java is \
        a result of the time I spent in my second semester computer \
        science course, computer science theory course, and algorithms \
        course."
    },
    {
        icon: "fas fa-bookmark",
        title: "C#/.NET",
        description: "Most of my video game oriented personal projects \
        have been written in C#/.NET in collaboration with the MonoGame \
        framework. For more information on related projects, please visit \
        my projects tab."
    },
    {
        icon: "fas fa-bookmark",
        title: "Python Programming Language",
        description: "I have experience using Python to write small tools and \
        participate in coding challenges, such as the annual Advent of Code holiday \
        coding challenge. In recent months, I have started to use Python for learning \
        and writing applications that involve AI and machine learning."
    },
    {
        icon: "fas fa-bookmark",
        title: "ReactJS",
        description: "I have some experience using React to develop web \
        applications as a means of interfacing with tools that I have built, \
        as well as this website! I am looking to become more familiar with \
        React through future personal projects related to AI and machine learning."
    },
    {
        icon: "fas fa-bookmark",
        title: "JavaScript/HTML5/CSS",
        description: "I have some experience using JavaScript, HTML and CSS to \
        develop a few web applications, as well as this website. During my first \
        co-op with Carestream Health, Inc. I spent the majority of my time writing \
        JavaScript using AngularJS."
    },
    {
        icon: "fas fa-bookmark",
        title: "Agile Development",
        description: "I first got some experience with Agile development in my \
        introduction to software engineering course where I built a checkers web \
        application along with a team of four other developers. I also have experience \
        using Agile development in my first co-op with Carestream Health, Inc."
    },
    {
        icon: "fas fa-bookmark",
        title: "Git/GitHub/Azure DevOps",
        description: "Throughout my college life and professional life I have used git \
        through the command line in conjunction with GitHub and Azure DevOps. While I have \
        predominantly used GitHub for my personal work, I have used Azure DevOps in my work \
        at Carestream Health, Inc."
    }
];

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
                    <div className="name">Benjamin Piro</div>
                    <br/>
                    <div className="education">RIT '24, Computer Science Student, Software Engineer, and Musician</div>
                    <div className="text">I am a current undergraduate student at the Rochester Institute of Technology and 
                        I have a deep passion for both computer science and music. My interests included
                        software development, computational mathematics, artificial intelligent, and machine
                        learning. In my leisure, I enjoy performing as a tubist in the RIT Philharmonic
                        Orchestra and participating as a member and section leader of The Cadets Drum
                        &amp; Bugle Corps tuba section.</div>
                    <br/>
                    <div className="text">I am currently working as a software engineer intern at Carestream Health, Inc. as a member
                        of their ImageView team. This team is responsible for developing and maintaining the user
                        interfaces used on Carestream's suite of X-ray machines.
                    </div>
                    <br/><br/>
                    <div className="education">Rochester Institute of Technology (RIT)</div>
                    <ul className="education-list">
                        <li className="bold">Bachelor of Science in Computer Science</li>
                        <li className="bold">Immersion in German Language &amp; Culture</li>
                        <li className="regular">Alumnus of Computer Science House</li>
                        <li className="regular">
                            Outstanding Undergraduate Scholar Award Recipient (awarded to the top 1% undergraduate students at RIT)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-title">Skills</div>
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
                <div className="button"><Link to="/extra"><div className="text">Extra</div></Link></div>
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