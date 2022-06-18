import React from 'react';
import AvailableMeals from './AvailableMeals';

import MealsSummery from './MealsSummery';

const Meals = props => {
    return (
        <>
            <MealsSummery />
            <AvailableMeals />
        </>
    )
}

export default Meals;