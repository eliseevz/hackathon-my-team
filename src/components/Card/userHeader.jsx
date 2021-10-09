import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../UI/badge/badge';
import classes from './UserCard.module.css';

const UserHeader = ({name, role, imageURL}) => {
	return ( 
		<>
			<img className={`card-img-top ${classes.userImg} `} src={imageURL} alt='img' />
			<div className='d-flex flex-column align-items-start'>
				<div className='d-flex flex-row mb-1'>
					{role.map(({ type, name }, index) => (
						<Badge type={type} text={name} key={index} />
					))}
				</div>

				<h5 className='mb-0'>{name}</h5>
				<span>Front-end developer</span>
			</div>
			<i className='bi bi-heart' />
		</>
	);
}

UserHeader.propTypes = {
	name: PropTypes.string.isRequired,
	role: PropTypes.array.isRequired,
	imageURL: PropTypes.string.isRequired
};

 
export default UserHeader;