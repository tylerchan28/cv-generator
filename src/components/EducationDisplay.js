import React from "react";

const EducationDisplay = ({ eduItem, deleteInfo }) => {
    return (
        <div>
            <h3>{eduItem.school}</h3>
            <p>{eduItem.major}</p>
            <p>{eduItem.degree}</p>
            <p>{eduItem.dates}</p>
            <button onClick={() => deleteInfo(eduItem)}>Delete</button>
        </div>
    )
}

export default EducationDisplay;