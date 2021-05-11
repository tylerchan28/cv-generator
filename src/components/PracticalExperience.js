import React, { useState } from "react";
import PracticalDisplay from "./PracticalDisplay";
import PracticalExperienceForm from "./PracticalExperienceForm";

const PracticalExperience = () => {
    
    let [practicalInfo, setPracticalInfo] = useState([])
    let [showDisplay, setShowDisplay] = useState(false);

    const displayChange = () => {
        setShowDisplay(!showDisplay)
    }

    const saveInfo = (info) => {
        const allInfo = [...practicalInfo, info]
        setPracticalInfo(allInfo)
        displayChange()
    }
    
    const deleteInfo = (itemToRemove) => {
        const allInfo = [...practicalInfo]
        const newInfo = allInfo.filter((infoItem) => itemToRemove.id !== infoItem.id)
        setPracticalInfo(newInfo);
    }

    return (
        <div>
            {practicalInfo.map((practicalItem) => (
                <PracticalDisplay 
                    practicalItem={practicalItem}
                    key={practicalItem.id}
                    deleteInfo={deleteInfo}
                />
            ))}
            <button onClick={displayChange}>+Practical Experience</button>
            <PracticalExperienceForm 
                displayChange={displayChange}
                showDisplay={showDisplay}
                saveInfo={saveInfo}
            />
        </div>
    )
}

export default PracticalExperience;