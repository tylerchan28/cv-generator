import React, { useState } from "react";
import EducationDisplay from "./EducationDisplay";
import EducationForm from "./EducationForm";


const Education = () => {

    let [eduFormInfo, addEduFormInfo] = useState([])

    const saveInfo = (info) => {
        const allInfo = [...eduFormInfo, info]
        addEduFormInfo(allInfo)
        console.log(allInfo)
    }

    const deleteInfo = (itemToRemove) => {
        const allInfo = [...eduFormInfo];
        const newInfo = allInfo.filter((infoItem) => itemToRemove.id !== infoItem.id)
        addEduFormInfo(newInfo);
    }

    return (
        <div>
           Education
            {eduFormInfo.map((eduItem) => (
                <EducationDisplay 
                    eduItem={eduItem} 
                    key={eduItem.id}
                    deleteInfo={deleteInfo}    
                />
           ))}
        
            <EducationForm 
                saveInfo={saveInfo}
            />
        </div>
    )
}

export default Education;




