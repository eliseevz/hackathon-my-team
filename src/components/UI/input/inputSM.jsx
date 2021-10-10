import React from 'react';
import classes from "./inpit.module.css"
import PropTypes from "prop-types"

const InputSM = ({item, onChange}) => {

    return (
        <div className="d-flex flex-column mb-3">
            <span className="mb-2">{item.name}</span>
            <input onChange={onChange} className={`${classes.mainInput}`} value={item.link} type="text"/>
        </div>
    )
};

InputSM.propType = {
    // item: PropTypes.object.isRequired,
    // onChange: PropTypes.func.isRequired,
}

export default InputSM;
