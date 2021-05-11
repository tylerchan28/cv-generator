import React, { useState } from "react";
import EducationDisplay from "./EducationDisplay";
import EducationForm from "./EducationForm";


const Education = () => {

    let [eduFormInfo, addEduFormInfo] = useState([])

    const saveInfo = (info) => {
        const newEduInfo = [...eduFormInfo, info]
        addEduFormInfo(newEduInfo)
    }

    return (
        <div>
           Education
            {eduFormInfo.map((eduItem) => (
                <EducationDisplay eduItem={eduItem} key={eduItem.school}/>
           ))}
        
            <EducationForm 
                saveInfo={saveInfo}
            />
        </div>
    )
}

export default Education;




