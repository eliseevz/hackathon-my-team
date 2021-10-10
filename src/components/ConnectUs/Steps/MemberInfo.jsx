import React, {useEffect} from 'react';
import Input from "../../UI/input/input";

const MemberInfo = ({state, setState}) => {

    const changeHandler = (e, item) => {
        console.log("changed")
        const newItem = {...state[item], value: e.target.value}
        const newState = {...state, [item]: newItem}
        setState({...newState})
    }

    return (
        <div>
            <h3>Основная информация</h3>
            {
                Object.keys(state).map(item => {
                    return <Input item={state[item]} onChange={(e) => changeHandler(e, item)} />
                })
            }
        </div>
    );
};

export default MemberInfo;
