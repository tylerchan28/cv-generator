import React, { useState } from "react";
import uniqid from "uniqid";
import Modal from "react-modal";
import "../App.css";
Modal.setAppElement('#root');

const EducationForm = (props) => {
    const [education, setEducation] = useState({
        id: uniqid(),
        school: "",
        degree: "",
        major: "",
        dates: "",
    });

    const onSchoolChange = (e) => {
        const school = e.target.value;
        setEducation({
            ...education,
            school
        })
    }

    const onDegreeChange = (e) => {
        const degree = e.target.value;
        setEducation({
            ...education,
            degree
        })
    }

    const onMajorChange = (e) => {
        const major = e.target.value;
        setEducation({
            ...education,
            major
        })
    }

    const onDatesChange = (e) => {
        const dates = e.target.value;
        setEducation({
            ...education,
            dates
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.saveInfo(education);
        setEducation({
            id: uniqid(),
            school: "",
            degree: "",
            major: "",
            dates: ""
        })
    }
    
    return (
        <Modal
            isOpen={props.showDisplay}
            contentLabel="Add education"
            closeTimeoutMS={200}
            className="modal"
        >
            <form className="education-form" onSubmit={onSubmit}>
                School
                <input 
                    type="text"
                    value={education.school}
                    onChange={onSchoolChange}
                    required
                />
                Degree
                <input 
                    type="text"
                    value={education.degree}
                    onChange={onDegreeChange}
                />
                Major
                <input 
                    type="text"
                    value={education.major}
                    onChange={onMajorChange}
                />
                Dates Attended (MM/YYYY - MM/YYYY)
                <input 
                    type="text"
                    value={education.dates}
                    onChange={onDatesChange}
                    required
                />
                <div className="form-button-container">    
                    <button className="form-button form-button--add" type="submit">Add</button>
                    <button className="form-button form-button--cancel" type="button" onClick={props.displayChange}>Cancel</button>
                </div>
            </form>
        </Modal>

    )
}

export default EducationForm;