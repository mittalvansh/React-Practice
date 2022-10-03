import React, { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import './FormContent.css';

function FormContent(props) {

    const [error, setError] = useState();
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (enteredAge <= 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age(>0).'
            })
            return;
        }

        const inputData = {
            name: enteredName,
            age: enteredAge
        };
        props.onSaveInputData(inputData);
        setEnteredName('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <Overlay title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form onSubmit={submitHandler}>
                <div className="inputForm__Controls">
                    <div className="inputForm__Control">
                        <label>Username</label>
                        <input type="text" value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div className="inputForm__Control">
                        <label>Age(Years)</label>
                        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
                    </div>
                </div>

                <div className="inputForm__actions">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    );
}

export default FormContent;