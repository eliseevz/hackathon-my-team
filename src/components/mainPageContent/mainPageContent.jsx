import React from 'react';
import classes from './mainPageContent.module.css'
import Typewriter from "../typewriter/typewriter";
import mainPageImg from "../../assets/mainPage.png"
import CountOfMembers from "./countOfMembers";
import Button from "../UI/button/Button";
import { useHistory } from "react-router-dom"

const MainPageContent = () => {

    const history = useHistory()

    return (
        <div className={classes.mainContainer}>
            <div className="d-flex align-items-center overflow-hidden">
                <div>
                    <Typewriter />
                    <CountOfMembers/>
                    <Button type="primary" action={() => history.push("/connect")}>Присоединиться к нашей команде</Button>
                </div>
                <img src={mainPageImg} alt="Команда"/>
            </div>

        </div>
    );
};

export default MainPageContent;
