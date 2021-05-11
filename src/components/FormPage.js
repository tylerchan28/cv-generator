// holds the editable forms and selections
import React from "react";
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import PracticalExperience from "./PracticalExperience";

const FormPage = () => {
    return (
        <div>
            <GeneralInfo />
            <Education />
            <PracticalExperience />
        </div>
    )
}

export default FormPage;