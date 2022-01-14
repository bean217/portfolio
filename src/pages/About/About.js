import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div 
                className="landing" 
                style={{
                    height: `calc(100vh - ${document.getElementById("nav").offsetHeight}px)`,
                    backgroundColor: "red"}}>
                
            </div>
            <div  
                style={{
                    height: "100vh",
                    backgroundColor: "blue"}}>
                
            </div>
        </div>
    );
};

export default About;