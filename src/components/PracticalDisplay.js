import React from "react";

const PracticalDisplay = ({ practicalItem, deleteInfo }) => {
    return (
        <div>
            <div className="delete-container">
                <h3>{practicalItem.position}</h3>
                <button className="delete-button" onClick={() => deleteInfo(practicalItem)}>X</button>
            </div>
            <h4>{practicalItem.company}</h4>
            <p>{practicalItem.dates}</p>
            <p>{practicalItem.roles}</p>
        </div>
    )
}

export default PracticalDisplay;