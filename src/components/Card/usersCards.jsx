import React, { useState } from 'react';
import { allMembers } from '../../API/API';
import UserCard from './userCard';

const UsersCards = () => {
	const [users, setUsers] = useState(allMembers);

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				{users.map(user => (
					<UserCard {...user} key={user.id} />
				))}
			</div>
		</div>
	);
};

export default UsersCards;
