import React, {useState, useEffect} from 'react';
import {textAboutTeam} from "../../API/API"
import { getDelay } from '../../utils/helper';
import classes from "./typewriter.module.css"

const Typewriter = () => {

    const [text, setText] = useState(localStorage.getItem("textOnMainPage") || "")

    useEffect(() => {
        localStorage.setItem("textOnMainPage", "")
    })

    useEffect(() => {
        if (textAboutTeam.length !== text.length) {
            const delay = getDelay()
            setTimeout(() => {
                setText(text + textAboutTeam[text.length])
            }, delay * 100)
        }
    }, [text])

    useEffect(() => {
        return () => {
            localStorage.setItem("textOnMainPage", text)
        }
    });

    return (
        <div className={classes.mainPageText}>
            { text }_
        </div>
    );
};

export default Typewriter;
