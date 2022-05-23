import React, { useState } from "react";

import classes from "./Search.module.css";

const Search = props => {
    const users = [
        {   
            'id': 1,
            'email': 'ali@mail.com',
            'age': 20
        },
        {   
            'id': 2,
            'email': 'hassan@mail.com',
            'age': 25
        },
        {   
            'id': 3,
            'email': 'kamran@mail.com',
            'age': 30
        }
    ];
    const [query, setQuery] = useState('');
    return (
        <>
            <div className={classes.search}>
                <input type="search" placeholder='Search...' onChange={ (e) => setQuery(e.target.value)}/>
                <ul>
                    {users.filter(user => user.email.toLowerCase().includes(query)).map((user) => (
                        <li key={user.id}>{user.email} ({user.age} years old.)</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Search;