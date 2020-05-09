import React from 'react';

import classes from './Logo.css';
import burgerLogo from '../../assets/images/original.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);

export default logo;