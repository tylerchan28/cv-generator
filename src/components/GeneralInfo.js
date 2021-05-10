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
        console.log(generalInfo.name);
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
            <form>
                <input 
                    type="text"
                    placeholder="Name"
                    autoFocus
                    value={generalInfo.name}
                    onChange={handleNameChange}
                />
                <input 
                    type="text"
                    placeholder="E-mail"
                    value={generalInfo.email}
                    onChange={handleEmailChange}
                />
                <input 
                    type="text"
                    placeholder="Phone Number"
                    value={generalInfo.phone}
                    onChange={handlePhoneChange}
                />
            </form>
        </div>
    )
}

export default GeneralInfo;