import React, { useState } from "react";
import uniqid from "uniqid";
import Modal from "react-modal";
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
        >
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="School"
                    value={education.school}
                    onChange={onSchoolChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="Degree"
                    value={education.degree}
                    onChange={onDegreeChange}
                />
                <input 
                    type="text"
                    placeholder="Major"
                    value={education.major}
                    onChange={onMajorChange}
                />
                <input 
                    type="text"
                    placeholder="Dates"
                    value={education.dates}
                    onChange={onDatesChange}
                    required
                />
                <div>    
                    <button type="submit">Save</button>
                    <button type="button" onClick={props.displayChange}>Cancel</button>
                </div>
            </form>
        </Modal>

    )
}

export default EducationForm;