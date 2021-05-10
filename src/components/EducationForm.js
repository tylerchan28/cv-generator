import React, { useState } from "react";

const Education = () => {
    const [education, setEducation] = useState({
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
    
    return (
        <div>
            <form>
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
                
            </form>
        <button>Cancel</button>
        </div>

    )
}

export default Education;