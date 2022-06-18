import React from 'react';

import classes from './MealsSummary.module.css';

const MealsSummery = props => {
    return (
        <section className={classes.summary}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    )
}

export default MealsSummery;