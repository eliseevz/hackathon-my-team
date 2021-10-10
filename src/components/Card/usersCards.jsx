import React, { useState } from 'react';
import { allMembers } from '../../API/API';
import UserCard from './userCard';

const UsersCards = () => {

	const [users, setUsers] = useState(allMembers);
	console.log(users, " this is users in usersCard")
	return (
		<div className='container p-0'>
			<h2 className='mb-4'>Kоманда</h2>
			<div className='row justify-content-center'>
				{users.map(user => (
					<UserCard {...user} key={user.id} />
				))}
			</div>
		</div>
	);
};

export default UsersCards;
