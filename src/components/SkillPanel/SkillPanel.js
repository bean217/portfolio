import React from "react";
import "./SkillPanel.css";

function SkillPanel(props) {
    const skillData = props.skillData;
    return (
        <div className="skill-panel">
            <div className="skill-header">
                <div className={`skill-icon ${skillData.icon}`}></div>
                <div className="skill-title">{skillData.title}</div>
            </div>
            <div className="skill-description">{skillData.description}</div>
        </div>
    );
}

export default SkillPanel;