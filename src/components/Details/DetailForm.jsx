import React from "react";
import DetailList from "./DetailList";
import './DetailForm.css'

function DetailForm(props) {
    return (
        <div className="details__controls">
            <DetailList items={props.details} />
        </div>
    );
}

export default DetailForm;