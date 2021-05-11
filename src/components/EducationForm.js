import React, { useState } from "react";
import uniqid from "uniqid";

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
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="School"
                    value={education.school}
                    onChange={onSchoolChange}
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
                />
                <div>    
                    <button type="submit">Save</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>

    )
}

export default EducationForm;