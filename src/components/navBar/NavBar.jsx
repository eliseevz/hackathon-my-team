import React from 'react';
import classes from "./Navbar.module.css"

const NavBar = () => {
    return (
        <div className={classes.mainContainer}>
            <h1 className={`d-flex ${classes.title}`}>
                Hello
            </h1>
        </div>
    );
};

export default NavBar;
