// holds the editable forms and selections
import React from "react";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import PracticalExperienceForm from "./PracticalExperienceForm";

const FormPage = () => {
    return (
        <div>
            <GeneralInfo />
            <Education />
            <PracticalExperienceForm />
        </div>
    )
}

export default FormPage;