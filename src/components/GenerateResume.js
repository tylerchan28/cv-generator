import React from "react";

const GenerateResume = () => {
    const disableAll = () => {
        const buttons = document.getElementsByTagName("button");
        Array.from(buttons, (button) => (button.style.display = "none"));
        
        const inputs = document.getElementsByTagName("input");
        Array.from(inputs, (input) => {
            input.style.cursor = "default";
            input.disabled = true;
            input.style.backgroundColor = "white";
            return input;
        })
        const header = document.querySelector(".header-name");
        header.parentElement.removeChild(header);
        
    }
    
    return (
        <div>
            <button onClick={disableAll}>
                Generate Resume
            </button>
        </div>
    )
}

export default GenerateResume;