import React from "react";
import "./SkillPanel.css";

import { SkillsData, SkillsColorGradient } from "../../data/about_data";

function SkillPanel(props) {
    const skillData = props.skillData;
    const len = SkillsData.length;
    const colorRangeModifier = {
        red: SkillsColorGradient.startColor.r + ((SkillsColorGradient.endColor.r - SkillsColorGradient.startColor.r) / (len-1)) * skillData.index,
        green: SkillsColorGradient.startColor.g + ((SkillsColorGradient.endColor.g - SkillsColorGradient.startColor.g) / (len-1)) * skillData.index,
        blue: SkillsColorGradient.startColor.b + ((SkillsColorGradient.endColor.b - SkillsColorGradient.startColor.b) / (len-1)) * skillData.index
    };
    return (
        <div className="skill-panel-wrapper" style={
            {background: `linear-gradient(135deg, rgb(${colorRangeModifier.red}, ${colorRangeModifier.green}, ${colorRangeModifier.blue}), #181a1b)`}
            }>
            <div className="skill-panel">
                <div className="skill-header">
                    <div className={`skill-icon ${skillData.icon}`}></div>
                    <div className="skill-title">{skillData.title}</div>
                </div>
                <div className="skill-description">{skillData.description}</div>
            </div>
        </div>
    );
}

export default SkillPanel;