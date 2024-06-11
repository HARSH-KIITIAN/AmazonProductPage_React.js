import React from "react";
import classes from './TopBar.module.css';

const TopBar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
            <img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png" alt="logo" />
            </nav>
        </header>        
    );
}

export default TopBar;