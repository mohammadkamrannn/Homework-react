import React, {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import headerImage from '../../assets/meals.jpg';


const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Table of foods"/>
            </div>
        </Fragment>
    )
}

export default Header;