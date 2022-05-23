import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import AddUser from './components/Users/AddUser';

import UsersList from './components/Users/UsersList';

import './App.css';
import ErrorModal from './components/UI/ErrorModal';

function App() {

  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(false);

  const addUserHandler = (email, age) => {

     if(email.trim().length === 0 || age.trim().length ===0) {
       setError({
         title: 'Invalid Input',
         message: 'Please Enter a valid email and age.'
       });
       return;
     }
     if(+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please Enter a valid age'
      });
      return;
     }
     if(usersList.find(user => user.email === email)) {
       setError({
         title: 'Duplicate Email',
         message: 'Email address mus be unic.'
       });
       return;
     }
     setError(false);

    setUsersList(prevUserList => {
      return [...usersList, {email, age, id: Math.random().toString()}];
    });
  }

  const closeModalHandler = () => {
    setError(false);
  }

  return (
    <>
      {error && ReactDOM.createPortal(
        <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler} />,
        document.getElementById('modal-root')
      )}
      <div className='d-flex justify-content-between align-items-top'>
        <AddUser addUser={addUserHandler} />
      </div>
      <UsersList users={usersList} />
    </>
  );
}

export default App;
