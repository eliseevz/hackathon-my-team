import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import classes from './UserCard.module.css';
import Button from '../UI/button/Button';
import UserInfo from './userInfo';
import Social from './social';
import UserHeader from './userHeader';

const UserCard = ({ id, socialMedia, ...rest }) => {
	const history = useHistory();

	return (
		<div className='col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-1'>
			<div className={`card ${classes.card}`}>
				<div className={`d-flex flex-row justify-content-between align-self-center align-items-center ${classes.cardHeader}`}>
					<UserHeader {...rest} />
				</div>

				<div className='card-body d-flex flex-column'>
					<UserInfo {...rest} />

					<div className='mt-3 mb-3'>
						{socialMedia.map((social, index) => (
							<Social {...social} key={index} />
						))}
					</div>

					<Button type='secondary' action={() => history.push(`/members/${id}`)}>
						Посмотреть
					</Button>
				</div>
			</div>
		</div>
	);
};

UserCard.propTypes = {
	id: PropTypes.number.isRequired,
	socialMedia: PropTypes.array.isRequired
};

export default UserCard;
