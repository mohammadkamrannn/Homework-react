import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';

import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
const INITIAL_VALUE = [
  {
    id: 'es01',
    title: 'Car Insurance',
    amount: 94.14,
    date: new Date(2020, 4, 14)
  },
  {
    id: 'es02',
    title: 'Buy Book',
    amount: 5.19,
    date: new Date(2021, 7, 14)
  },
  {
    id: 'es03',
    title: 'New Desk',
    amount: 53.5,
    date: new Date(2020, 8, 20)
  },
  {
    id: 'es04',
    title: 'Toilet Paper',
    amount: 10.14,
    date: new Date(2022, 6, 25)
  }
];
function App() {
  
  const [expenses, setExpenses] = useState(INITIAL_VALUE);

  const onAddExpenseHandler = expense => {
    setExpenses(prevExpenses =>  [expense, ...prevExpenses]);
  }

  return (
    <div className='container'>
      <h2>MFT Narmak</h2>
      <NewExpense onAddExpense = {onAddExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
