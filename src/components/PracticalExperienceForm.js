import React, { useState } from "react";

const PracticalExperienceForm = () => {
    const [practicalExp, setPracticalExp] = useState({
        title: "",
        company: "",
        dates: "",
        roles: ""
    })

    const onTitleChange = (e) => {
        const title = e.target.value;
        setPracticalExp({
            ...practicalExp,
            title
        })
    }
    
    const onCompanyChange = (e) => {
        const company = e.target.value;
        setPracticalExp({
            ...practicalExp,
            company
        })
    }

    const onDatesChange = (e) => {
        const dates = e.target.value;
        setPracticalExp({
            ...practicalExp,
            dates
        })
    }

    const onRolesChange = (e) => {
        const roles = e.target.value;
        setPracticalExp({
            ...practicalExp,
            roles
        })
    }

    return (
        <div>
            <form>
                <input 
                    type="text"
                    placeholder="Title"
                    value={practicalExp.title}
                    onChange={onTitleChange}
                />
                <input 
                    type="text"
                    placeholder="company"
                    value={practicalExp.title}
                    onChange={onCompanyChange}
                />
                <input 
                    type="text"
                    placeholder="dates"
                    value={practicalExp.title}
                    onChange={onDatesChange}
                />
                <input 
                    type="text"
                    placeholder="roles"
                    value={practicalExp.title}
                    onChange={onRolesChange}
                />
            </form>
        </div>
    )
}

export default PracticalExperienceForm;