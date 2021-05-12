import React, { useState } from "react";
import EducationDisplay from "./EducationDisplay";
import EducationForm from "./EducationForm";


const Education = () => {
    let [eduFormInfo, addEduFormInfo] = useState([])
    let [showDisplay, setShowDisplay] = useState(false)

    const displayChange = () => {
        setShowDisplay(!showDisplay);
        console.log("working")
    }

    const saveInfo = (info) => {
        const allInfo = [...eduFormInfo, info]
        addEduFormInfo(allInfo)
        displayChange()
    }

    const deleteInfo = (itemToRemove) => {
        const allInfo = [...eduFormInfo];
        const newInfo = allInfo.filter((infoItem) => itemToRemove.id !== infoItem.id)
        addEduFormInfo(newInfo);
    }

    return (
        <div className="education-list">
            {eduFormInfo.map((eduItem) => (
                <EducationDisplay 
                    eduItem={eduItem} 
                    key={eduItem.id}
                    deleteInfo={deleteInfo}    
                />
           ))}
           <button className="add-button" onClick={displayChange}>+Education</button>
            <EducationForm 
                showDisplay={showDisplay}
                displayChange={displayChange}
                saveInfo={saveInfo}
            />
        </div>
    )
}

export default Education;




