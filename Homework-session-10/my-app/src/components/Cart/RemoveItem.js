import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'
import classes from "./RemoveItem.module.css"

const RemoveItem = props => {

    const cartContext = useContext(CartContext)  

    const cartRemoveHandler = () =>{
        cartContext.removeItem(props.item.id)
    }
    
    return (
        <div className={classes.listItem}>
            <li> 
                <div>{props.item.name} x {props.item.amount}</div>    
                <button onClick={cartRemoveHandler}>X</button>
            </li>
            <hr />
        </div>
    )
}

export default RemoveItem