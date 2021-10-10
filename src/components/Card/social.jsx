import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserCard.module.css';
import is from "is_js"

const Social = ({name, link}) => {
	if (is.url(link)) {
		return (
			<a href={link} className={`pe-2 ${classes.link}`}>
				<i className={`bi bi-${name}`} />
			</a>
		);
	} else {
		return null
	}

};

Social.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}

export default Social;
