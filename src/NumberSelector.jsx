import React from "react";
import withChangedCount from "./withChangedCount";

const NumberSelector = ({ text, isSelected, onSelectChanged }) => {
    const handleChange = ev => {
        onSelectChanged(ev.target.checked);
    };

    return (
        <div className="number-selector">
            <input id={`checkbox-${text}`} type="checkbox" checked={isSelected} onChange={handleChange} />
            <label htmlFor={`checkbox-${text}`}>{text}</label>{" "}
        </div>
    );
};

export default withChangedCount(NumberSelector);
