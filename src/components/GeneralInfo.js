import React, { useState } from "react";

const GeneralInfo = () => {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleNameChange = (e) => {
        const name = e.target.value;
        setGeneralInfo({
            ...generalInfo,
            name
        })
    }

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setGeneralInfo({
            ...generalInfo,
            email
        })
    }

    const handlePhoneChange = (e) => {
        const phone = e.target.value;
        setGeneralInfo({
            ...generalInfo,
            phone
        })
    }

    return (
        <div>
            <form className="general-info-form">
                <input 
                    className="input-name"
                    type="text"
                    placeholder="Name"
                    autoFocus
                    value={generalInfo.name}
                    onChange={handleNameChange}
                />
                <div className="input-socials">
                    <input 
                        className="input-socials-email"
                        type="text"
                        placeholder="E-mail"
                        value={generalInfo.email}
                        onChange={handleEmailChange}
                    />
                    <input 
                        className="input-socials-phone"
                        type="text"
                        placeholder="Phone Number"
                        value={generalInfo.phone}
                        onChange={handlePhoneChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default GeneralInfo;