import React from 'react';
import classes from "./footer.module.css"

const Footer = () => {
	return ( 
		<div className={`container ${classes.footer}`}>
			<div className='d-flex justify-content-center' style={{color: '#585C7E'}}>
				<span>Сделано Иван х Павел х Алиса х Татьяна</span>
			</div>
		</div>
	);
}
 
export default Footer;