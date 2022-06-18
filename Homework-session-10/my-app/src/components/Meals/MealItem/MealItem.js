import React, {useContext} from 'react';
import CartContext from '../../../context/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {

    const cartContext = useContext(CartContext);

    const addToCartHandler = amount => {
        console.log(amount);
        cartContext.addItem({
            id: props.meal.id,
            name: props.meal.name,
            price: +props.meal.price,
            amount: +amount
        });
    }

    return (
        <li className={classes.meal}>
            <div >
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{props.meal.price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;