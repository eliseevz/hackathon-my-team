import React from 'react';
import classes from './mainPageContent.module.css'
import Typewriter from "../typewriter/typewriter";
import mainPageImg from "../../assets/mainPage.png"

const MainPageContent = () => {
    return (
        <div className={classes.mainContainer}>
            <Typewriter />
            <img src={mainPageImg} alt="#"/>
        </div>
    );
};

export default MainPageContent;
