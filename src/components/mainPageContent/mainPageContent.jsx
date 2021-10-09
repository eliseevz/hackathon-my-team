import React from 'react';
import classes from './mainPageContent.module.css'
import Typewriter from "../typewriter/typewriter";
import mainPageImg from "../../assets/mainPage.png"

const MainPageContent = () => {
    return (
        <div className={classes.mainContainer}>
            <div className="d-flex align-items-center">
                <Typewriter />
                <img src={mainPageImg} alt="Команда"/>
            </div>
        </div>
    );
};

export default MainPageContent;
