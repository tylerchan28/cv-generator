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
            contentLabel="Add practical experience"
            closeTimeoutMS={200}
            className="modal"
        >
            <form className="form-display" onSubmit={onSubmit}>
                Position
                <input 
                    type="text"
                    value={practicalExp.position}
                    onChange={onPositionChange}
                    required
                />
                Company
                <input 
                    type="text"
                    value={practicalExp.company}
                    onChange={onCompanyChange}
                    required
                />
                Dates (MM/YYYY - MM/YYYY)
                <input 
                    type="text"
                    value={practicalExp.dates}
                    onChange={onDatesChange}
                    required
                />
                Roles
                <textarea 
                    type="text"
                    value={practicalExp.roles}
                    onChange={onRolesChange}
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

export default PracticalExperienceForm;