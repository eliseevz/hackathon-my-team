import React from 'react';
import classes from "./inpit.module.css"
import PropTypes from "prop-types"

const Input = ({item, onChange}) => {
    console.log(item)
    return (
        <div className="d-flex flex-column mb-3">
            <span className="mb-2">{item.label}</span>
            <input onChange={onChange} className={`${classes.mainInput}`} value={item.value} type="text"/>
        </div>
    );
};

Input.propType = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;
