import React from "react";

const EducationDisplay = ({ eduItem, deleteInfo }) => {
    return (
        <div>
            <div className="delete-container">
                <h3>{eduItem.school}</h3>
                <button className="delete-button" onClick={() => deleteInfo(eduItem)}>X</button>
            </div>
            <p>{eduItem.degree}</p>
            <p>{eduItem.major}</p>
            <p>{eduItem.dates}</p>
        </div>
    )
}

export default EducationDisplay;