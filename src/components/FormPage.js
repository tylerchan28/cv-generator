// holds the editable forms and selections
import React from "react";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import PracticalExperience from "./PracticalExperience";

const FormPage = () => {
    return (
        <div className="parent-container">
            <GeneralInfo />
            <p className="section-title">Education</p>
            <Education />
            <p className="section-title">Practical Experience</p>
            <PracticalExperience />
        </div>
    )
}

export default FormPage;