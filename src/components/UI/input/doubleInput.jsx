import React from 'react';
import classes from "./inpit.module.css"
import PropTypes from "prop-types"

const DoubleInput = ({item, onChange, onRemove}) => {
    console.log(item)
    return (
        <div className="d-flex mb-3">
            <div className="d-flex flex-column">
                <span className="mb-2">Название технологии</span>
                <input onChange={(e) => onChange(e, "name")} className={`${classes.mainInput}`} value={item.name} type="text"/>
                <span className={classes.delete} onClick={onRemove}>Удалить</span>
            </div>
            <div className="d-flex flex-column ms-3">
                <span className="mb-2">Процент знаний</span>
                <input onChange={(e) => onChange(e, "prog")} className={`${classes.mainInput}`} value={item.prog} type="number" max={100} min={0}/>
            </div>
        </div>
    )
};

DoubleInput.propType = {

}

export default DoubleInput;
