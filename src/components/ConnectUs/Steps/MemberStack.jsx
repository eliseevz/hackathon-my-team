import React from 'react';
import Button from "../../UI/button/Button";
import DoubleInput from "../../UI/input/doubleInput";

const MemberStack = ({state, setState}) => {

    const onAddHandler = () => {
        setState([...state, {name: "", prog: 0}])
    }

    const onRemoveHandler = (itemIndex) => {
        setState(state.filter((item,index) => index !== itemIndex))
    }

    const onChangeHandler = (e, index, key) => {
        let inputValue = e.target.value
        if (e.target.value > 100 && key === "prog") {
            inputValue = 100
        }
        if (e.target.value < 0 && key === "prog") {
            inputValue = 0
        }
        const newItem = {...state[index], [key]: inputValue}
        let newState = [...state]
        newState[index] = newItem
        console.log(newState, " newstate")
        setState(newState)
    }

    return (
        <div>
            <h3>Основные технологии</h3>
            {
                state.map((item, index) => {
                    return <DoubleInput item={item} onRemove={() => onRemoveHandler(index)} onChange={(e, key) => onChangeHandler(e, index, key)} />
                })
            }
            <Button action={onAddHandler} type="muted">+</Button>
        </div>
    );
};

export default MemberStack;
