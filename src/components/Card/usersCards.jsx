import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allMembers } from '../../API/API';
import UserCard from './userCard';

const UsersCards = () => {
	const [users, setUsers] = useState(allMembers);

	return ( 
		<div className='container d-flex flex-row'>
			{
				users.map(user => (
					
						<UserCard user={user} key={user.id}/>
					
				))
			}
		</div>
	);
}
 
export default UsersCards;