import React, { useState } from "react";
import InputForm from "./components/Form/InputForm";
import DetailForm from "./components/Details/DetailForm";
import "./App.css";

const INPUT_DETAILS = []

function App() {
    const [details, setDetails] = useState(INPUT_DETAILS);

    const addDetailsHandler = (inputDetails) => {
        setDetails((prevDetails) => {
            return [inputDetails, ...prevDetails];
        });
    };

    return (
        <div>
            <InputForm onAddDetails={addDetailsHandler} />
            <DetailForm details={details} />
        </div>
    );
}

export default App;
