import React from 'react';

const Badge = ({color, content}) => {
	return ( 
		<span className={`badge badge-pill bg-${color} me-1`}>{content}</span>
	 );
}
 
export default Badge;