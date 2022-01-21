import React, { useContext } from 'react';
import { NavDimsContext } from '../../App';
import './About.css';

const About = (props) => {
    const navDims = useContext(NavDimsContext);
    const scrollPosition = props.scrollPosition;

    return (
        <div>
            <div 
                className="landing" 
                style={{
                    height: `calc(100vh - ${navDims.height}px)`,
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