import React from 'react';

import UserItem from './UserItem';

import classes from "./UsersList.module.css";

const UsersList = props => {
        if (!props.users.length) {
            return (
                <div className={classes.userNotFound}>
                    <h1>User not found...</h1>
                </div>
            )
        }
        return (
            <div className={classes.userList}>
                <ul>
                    {props.users.map(user => (
                        <UserItem 
                        key={user.id}
                        email={user.email}
                        age={user.age}
                        />
                    ))}
                </ul>
            </div>
        )
}

export default UsersList;