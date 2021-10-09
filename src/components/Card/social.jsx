import React from 'react';
import PropTypes from 'prop-types';

const Social = ({name, link}) => {
	return (
		<a href={link} className='pe-2' style={{ color: '#fff' }}>
			<i className={`bi bi-${name}`} />
		</a>
	);
};

Social.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}

export default Social;
