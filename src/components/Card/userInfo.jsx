import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({age, country, stack}) => {
	return ( 
		<>
			<span>Возраст: {age}</span>
			<span>Страна: {country}</span>
			<div>
				<span>Стэк технологий: </span>
				{stack.map(({name}) => (
					<span key={name}>{name} </span>
				))}
			</div>
		</>
	 );
}

UserInfo.propTypes = {
	age: PropTypes.number.isRequired,
	country: PropTypes.string.isRequired,
	stack: PropTypes.array.isRequired
}
 
export default UserInfo;