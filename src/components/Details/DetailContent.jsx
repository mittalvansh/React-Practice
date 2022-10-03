import React from "react";
import './DetailContent.css';

function DetailContent(props) {
    return (
        <div className="detailItem__Control">
            <p>{`${props.name} (${props.age} Years Old)`}</p>
        </div>
    );
}

export default DetailContent;