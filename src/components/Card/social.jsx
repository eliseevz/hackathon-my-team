import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserCard.module.css';

const Social = ({name, link}) => {
	return (
		<a href={link} className={`pe-2 ${classes.link}`}>
			<i className={`bi bi-${name}`} />
		</a>
	);
};

Social.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}

export default Social;
