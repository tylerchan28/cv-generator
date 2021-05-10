// holds the editable forms and selections
import React from "react";
import EducationForm from "./EducationForm";
import GeneralInfo from "./GeneralInfo";
import PracticalExperienceForm from "./PracticalExperienceForm";

const FormPage = () => {
    return (
        <div>
            <GeneralInfo />
            <EducationForm />
            <PracticalExperienceForm />
        </div>
    )
}

export default FormPage;