import React from "react";

const EducationDisplay = ({ eduItem, deleteInfo }) => {
    return (
        <div className="education-display">
            <button className="delete-button" onClick={() => deleteInfo(eduItem)}>X</button>
            <h3>{eduItem.school}</h3>
            <p>{eduItem.degree}</p>
            <p>{eduItem.major}</p>
            <p>{eduItem.dates}</p>
        </div>
    )
}

export default EducationDisplay;