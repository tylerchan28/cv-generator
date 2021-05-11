import React, { useState } from "react";
import uniqid from "uniqid";
import Modal from "react-modal";
Modal.setAppElement('#root');

const PracticalExperienceForm = (props) => {
    const [practicalExp, setPracticalExp] = useState({
        id: uniqid(),
        position: "",
        company: "",
        dates: "",
        roles: ""
    })

    const onPositionChange = (e) => {
        const position = e.target.value;
        setPracticalExp({
            ...practicalExp,
            position
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

    const onSubmit = (e) => {
        e.preventDefault();
        props.saveInfo(practicalExp);
        setPracticalExp({
            id: uniqid(),
            position: "",
            company: "",
            dates: "",
            roles: ""
        })
    }
    
    return (
        <Modal
            isOpen={props.showDisplay}
        >
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Position"
                    value={practicalExp.position}
                    onChange={onPositionChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="Company"
                    value={practicalExp.company}
                    onChange={onCompanyChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="Dates"
                    value={practicalExp.dates}
                    onChange={onDatesChange}
                    required
                />
                <input 
                    type="text"
                    placeholder="Roles"
                    value={practicalExp.roles}
                    onChange={onRolesChange}
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

export default PracticalExperienceForm;