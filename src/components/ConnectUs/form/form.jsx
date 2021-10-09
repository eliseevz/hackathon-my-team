import React, {useState} from 'react';
import classes from "./form.module.css"
import Input from "../../UI/input/input";
import Button from "../../UI/button/Button";

const Form = () => {

    const initialState = {
        name: {label: "Имя", value: ""},
        country: {label: "Страна", value: ""},
        age: {label: "Возраст", value: ""},
        about: {label: "О себе", value: ""},
        url: {label: "URL фотографии", value: ""},
        insagram: {label: "Instagram", value: ""},
        telegram: {label: "Telegram", value: ""},
        github: {label: "Git", value: ""},
        linkedin: {label: "Linkedin", value: ""},
    }

    const [state, setState] = useState(initialState);

    const changeHandler = (e, key) => {
        const newState = {
            ...state,
            [key]: {...state[key], value: e.target.value}
        }
        setState(newState)
    }

    const addNewMemberHandler = (newMember) => {
        if (localStorage.getItem("newMemers")) {
            let newMembers = [
                ...JSON.parse(localStorage.getItem("newMemers")),
                newMember
            ]
        } else {
            let newMemItem = {}
            Object.keys(state).map(item => {
                newMemItem[item] = state[item].value
            })
            console.log(newMemItem, " newMemItem")
            // const setMember = JSON.stringify([newMember])
            // localStorage.setItem("newMemers", setMember)
        }
    }

    return (
        <div className={`${classes.mainContainer} d-flex flex-column`}>
            {
                Object.keys(state).map(item => {
                    return <Input onChange={(e) => changeHandler(e, item)} item={state[item]} ></Input>
                })
            }
            <Button action={() => addNewMemberHandler(state)} type="primary">Хочу к вам в команду!</Button>
        </div>
    );
};

export default Form;
