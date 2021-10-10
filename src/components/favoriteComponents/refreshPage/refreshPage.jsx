import React from 'react';
import { useHistory } from "react-router-dom"

const RefreshPage = () => {

    const history = useHistory()

    const onClickHandler = () => {
        history.push("/favorite")
    }

    return (
        <div className="container mb-3">
            <i style={{fontSize: 30}} onClick={onClickHandler} role="button" class="bi bi-arrow-clockwise"></i>
        </div>
    );
};

export default RefreshPage;
