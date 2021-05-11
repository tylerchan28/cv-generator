import React, { useState } from "react";
import PracticalDisplay from "./PracticalDisplay";
import PracticalExperienceForm from "./PracticalExperienceForm";

const PracticalExperience = () => {
    
    let [practicalInfo, setPracticalInfo] = useState([])

    const saveInfo = (info) => {
        const allInfo = [...practicalInfo, info]
        setPracticalInfo(allInfo)
        console.log(allInfo)
    }
    
    const deleteInfo = (itemToRemove) => {
        const allInfo = [...practicalInfo]
        const newInfo = allInfo.filter((infoItem) => itemToRemove.id !== infoItem.id)
        setPracticalInfo(newInfo);
    }

    return (
        <div>
            Practical Experience
            {practicalInfo.map((practicalItem) => (
                <PracticalDisplay 
                    practicalItem={practicalItem}
                    key={practicalItem.id}
                    deleteInfo={deleteInfo}
                />
            ))}
            <PracticalExperienceForm 
                saveInfo={saveInfo}
            />
        </div>
    )
}

export default PracticalExperience;