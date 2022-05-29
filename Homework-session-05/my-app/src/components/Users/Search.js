import React, { useState } from "react";

import classes from "./Search.module.css";

const Search = props => {

    const onChangeHandler = event => {
        props.onSearch(event.target.value);
    }
    return (
        <>
            <div className={classes.search}>
                <input type="search" placeholder='Search...' onChange={onChangeHandler}/>
            </div>
        </>
    )
}

export default Search;