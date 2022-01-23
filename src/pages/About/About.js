import React, { useContext } from 'react';
import { NavDimsContext } from '../../App';
import './About.css';

// Hooks
import useScrollPosition from '../../hooks/useScrollPosition';

const About = () => {
    console.log("About render")
    const navDims = useContext(NavDimsContext);
    const scrollPosition = useScrollPosition();
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