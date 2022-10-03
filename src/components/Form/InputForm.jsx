import React from 'react';
import FormContent from "./FormContent"
import './InputForm.css';

function InputForm(props) {
    const saveInputDataHandler = (enteredInputContent) => {
        const inputDetails = {
            ...enteredInputContent,
            id: Math.random().toString()
        };
        props.onAddDetails(inputDetails);
    }

    return (
        <div className='formContainer'>
            <FormContent onSaveInputData={saveInputDataHandler} />
        </div>
    );
}

export default InputForm;