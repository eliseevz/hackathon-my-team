import React from 'react';
import PropTypes from 'prop-types';
import classes from "./button.module.css"

const Button = ({children, type, action}) => {
    return (
        <button
            className={`${classes.myButton} ${classes[type]}`}
            onClick={action}
        >
            {children}
            <i className={`bi bi-arrow-right-short ${classes.buttonArrow}`}></i>
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string,
    action: PropTypes.func.isRequired
}

export default Button;
