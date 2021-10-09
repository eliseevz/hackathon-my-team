import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../Badge';
import classes from './UserCard.module.css';

const UserCard = ({user}) => {
	return ( 
		<Link to={`/members/${user.id}`} className={classes.link} >
		<div className={`card m-1 ${classes.card}`} style={{'width': '18rem', backgroundColor: '#2A283F'}}>
			<div className='d-flex flex-row justify-content-between align-self-center' style={{width: '100%', padding: '1rem 1rem 0 1rem'}}>
				<img className={`card-img-top ${classes.userImg} `} src={user.imageURL} alt="img"/>
				<div className='d-flex flex-column align-items-start'>
					<div className='d-flex flex-row mb-1'>
						{user.role.map(role => (
							<Badge color={role.type} content={role.name}/>
						))}
					</div>
					
					<h5 className='mb-0'>{user.name}</h5>
					<span>Front-end developer</span>
				</div>
				<i class="bi bi-heart"></i>
			</div>
			
			<div className="card-body d-flex flex-column">
				<span>Возраст: {user.age}</span>
				<span>Страна: {user.county}</span>
				<div>
					<span>Стэк технологий: </span>
					{user.stack.map(({name}) => (
						<span key={name}>{name} </span>
					))}
				</div>
				
				
				<div className='mt-2 mb-2'>
					{user.socialMedia.map(({name, link}) => (
						<a href={link} className='pe-2' style={{color: '#fff'}}>
							<i class={`bi bi-${name}`} />
						</a>
					))}
				</div>
			</div>
		</div></Link>
	 );
}
 
export default UserCard;