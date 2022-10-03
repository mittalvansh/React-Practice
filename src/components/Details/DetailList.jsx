import React from "react";
import DetailContent from "./DetailContent";

function DetailList(props) {
    if (props.items.length === 0) {
        return <h2>No Users Present</h2>
    }

    return (
        <div>
            {props.items.map(details => (
                <DetailContent
                    key={details.id}
                    name={details.name}
                    age={details.age}
                />
            ))}
        </div>
    );
}

export default DetailList;