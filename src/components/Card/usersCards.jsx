import React, { useState } from 'react';
import { allMembers } from '../../API/API';
import UserCard from './userCard';
import PropTypes from 'prop-types';

const UsersCards = ({children}) => {
	const [users, setUsers] = useState(allMembers);

	return (
		<div className='container p-0'>
			<h2 className='mb-4'>{children}</h2>
			<div className='row justify-content-center'>
				{users.map(user => (
					<UserCard {...user} key={user.id} />
				))}
			</div>
		</div>
	);
};

UsersCards.propTypes = {
	children: PropTypes.string.isRequired
}

export default UsersCards;