import React from "react";

const PracticalDisplay = ({ practicalItem, deleteInfo }) => {
    return (
        <div>
            <h3>{practicalItem.position}</h3>
            <h4>{practicalItem.company}</h4>
            <p>{practicalItem.dates}</p>
            <p>{practicalItem.roles}</p>
            <button onClick={() => deleteInfo(practicalItem)}>Delete</button>
        </div>
    )
}

export default PracticalDisplay;