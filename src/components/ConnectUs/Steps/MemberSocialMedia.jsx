import React from 'react';
import InputSM from "../../UI/input/inputSM";

const MemberSocialMedia = ({state, setState}) => {

    const onChangeHandler = (e, index) => {
        const newEl = {...state[index], link: e.target.value}
        const newState = [...state]
        newState[index] = newEl
        setState(newState)
    }

    return (
        <div>
            <h3>Социальные сети</h3>
            {
                state.map((item, index) => {
                    return <InputSM item={item} onChange={(e) => onChangeHandler(e, index)}/>
                })
            }
        </div>
    );
};

export default MemberSocialMedia;
