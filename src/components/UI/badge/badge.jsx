import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({text, type = "secondary"}) => {
    return (
        <span className={`badge bg-${type}`}>{text}</span>
    );
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Badge;
