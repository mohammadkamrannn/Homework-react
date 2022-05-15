import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = props => {

    const onSaveExpenseHandler = expenseData => {
        // console.log('NEW EXPENSE!');
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense = {onSaveExpenseHandler} />
        </div>
    )
}

export default NewExpense;