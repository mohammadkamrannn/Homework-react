import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('all');
    let filteredExpenses = [...props.items];
    if(filteredYear !== 'all') {
        filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear() == filteredYear;
        });
    }

    console.log(filteredExpenses);
    const yearChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeHandler = {yearChangeHandler}/>
            {filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses;