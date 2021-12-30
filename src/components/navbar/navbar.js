import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/github">GitHub</Link>
            </li>
        </div>
    );
};

export default navbar;