import React, {useContext} from 'react';
import CartContext from '../../context/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartContext = useContext(CartContext);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <i className="las la-lg la-cart-arrow-down"></i>
            </span>
            <span>
                Your Shopping Cart
            </span>
            <span className={classes.badge}>{cartContext.items.length}</span>
        </button>
    )
}

export default HeaderCartButton;