import React, { useState } from "react";

import "./ExpenseFrom.css";

const ExpenseForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__form-controlls">
                <div className="new-expense__form-controll">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__form-controll">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__form-controll">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__action">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;
