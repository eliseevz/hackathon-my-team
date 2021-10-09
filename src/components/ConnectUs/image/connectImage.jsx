import React from 'react';
import image from '../../../assets/addNewMember.png'
import classes from "./connectImage.module.css"

const ConnectImage = () => {
    return (
        <img className={classes.connectImage} src={image} alt="Новые участники"/>
    );
};

export default ConnectImage;
