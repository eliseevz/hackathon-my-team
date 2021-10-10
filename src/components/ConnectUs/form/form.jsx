import React, {useState, useEffect} from 'react';
import classes from "./form.module.css"
import Input from "../../UI/input/input";
import Button from "../../UI/button/Button";
import DoubleInput from "../../UI/input/doubleInput";
import { allMembers, setAllMembers } from "../../../API/API";
import MemberInfo from "../Steps/MemberInfo";
import MemberStack from "../Steps/MemberStack";
import MemberSocialMedia from "../Steps/MemberSocialMedia";
import { useHistory } from "react-router-dom"

const Form = () => {

    const history = useHistory()

    const memberInfoInitialState = {
        name: {label: "Имя", value: ""},
        age: {label: "Возраст", value: ""},
        county: {label: "Страна", value: ""},
        about: {label: "О себе", value: ""},
        imageURL: {label: "URL фотографии", value: ""},
    }

    const memberStackInitialState = [
        {name: "", prog: 0},
    ]

    const memberSocialMediaInititalState = [
        { name: "instragram", link: ""},
        { name: "telegram", link: ""},
        { name: "github", link: ""},
        { name: "linkedin", link: ""},
    ]

    const [memberInfo, setMemberInfo] = useState(memberInfoInitialState)
    const [memberStack, setMemberStack] = useState(memberStackInitialState);
    const [memberSocialMedia, setMemberSocialMedia] = useState(memberSocialMediaInititalState);

    let allSteps = [
        MemberInfo,
        MemberStack,
        MemberSocialMedia
    ]

    let allProps = [
        {state: memberInfo, setState: setMemberInfo},
        {state: memberStack, setState: setMemberStack},
        {state: memberSocialMedia, setState: setMemberSocialMedia}
    ]

    const [step, setStep] = useState({id: 0, component: allSteps[0]});

    const nextStepHandler = () => {
        if (step.id < 2) {
            setStep({id: step.id + 1, component: allSteps[step.id + 1]})
        }
    }
    const prevStepHandler = () => {
        if (step.id > 0) {
            setStep({id: step.id - 1, component: allSteps[step.id - 1]})
        }
    }

    const onAddNewMember = () => {
        console.log(allMembers)
        console.log(memberInfo, "member info")

        let stack = []
        memberStack.map(stackItem => {
            stack.push(stackItem)
        })

        let socialMedia = []
        memberSocialMedia.map(smItem => {
            socialMedia.push(smItem)
        })

        let newMemberInfo = {}
        Object.keys(memberInfo).forEach(item => {
            newMemberInfo[item] = memberInfo[item].value
        })

        console.log(newMemberInfo, "new member infi")
        console.log(stack, "stack")
        console.log(socialMedia, "socialMedia")

        let newMember = {
            id: allMembers.length,
            isFavorite: false,
            ...newMemberInfo,
            stack: stack,
            socialMedia: socialMedia,
            role: [{name: "new", type: "success"}]
        }

        setAllMembers([...allMembers, newMember])
        setMemberInfo(memberInfoInitialState)
        setMemberStack(memberStackInitialState)
        setMemberSocialMedia(memberSocialMediaInititalState)

        history.push(`/members/${newMember.id}`)

        alert("Добро пожаловать!")
        console.log(newMember)
    }

    return (
        <div className={`${classes.mainContainer} d-flex flex-column`}>
            { <step.component  state={allProps[step.id].state} setState={allProps[step.id].setState} /> }
            <div className={`${classes.buttonsWrap} d-flex`}>
                <Button action={prevStepHandler} type="secondary" >Назад</Button>
                {step.id === 2
                    ? <Button action={onAddNewMember} type="primary" >Присоединиться</Button>
                    : <Button action={nextStepHandler} type="primary" >Далее</Button>

                }
            </div>
        </div>
    );
};

export default Form;
