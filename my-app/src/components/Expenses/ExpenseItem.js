import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [date, setDate] = useState(props.date);


    // const clickHandler = () => {
    //     setTitle('Change');
    // }


    return (
        <Card className="expense-item">
            <ExpenseDate date={ date } />
            <div className="expense-item__description">
                <h2 className="expense-item__title">{ title }</h2>
                <div className="expense-item__amount">${ amount }</div>
            </div>
            {/* <button type="button" onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;