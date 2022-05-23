import React, {useState} from 'react';

import classes from './AddUser.module.css'

const AddUser = props => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.addUser(enteredEmail, enteredAge);
        setEnteredEmail('');
        setEnteredAge('');
    }

    return (
        <div className={classes.form}>
            <form onSubmit={submitHandler}>
                <div className='d-flex justify-content-between align-items-center mb-1'>
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={enteredEmail} id="email" placeholder='Enter your email...' onChange={emailChangeHandler} />
                </div>
                <div className='d-flex justify-content-between align-items-center mb-1'>
                    <label htmlFor="age">Age:</label>
                    <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />
                </div>
                <div className='d-flex justify-content-end'>
                    <button type='submit' className={classes.btn}>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;