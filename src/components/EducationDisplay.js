import React from "react";

const EducationDisplay = ({ eduItem }) => {
    return (
        <div>
            <h3>{eduItem.school}</h3>
            <p>{eduItem.major}</p>
            <p>{eduItem.degree}</p>
            <p>{eduItem.dates}</p>
        </div>
    )
}

export default EducationDisplay;