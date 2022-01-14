import React from 'react';
import './About.css';

const About = (props) => {
    const scrollPosition = props.scrollPosition;

    return (
        <div>
            <div 
                className="landing" 
                style={{
                    height: `calc(100vh - 100px)`,
                    backgroundColor: "red"}}>
                        
            </div>
            <div  
                style={{
                    height: "100vh",
                    backgroundColor: "blue"}}>
                {scrollPosition}
            </div>
        </div>
    );
};

export default About;