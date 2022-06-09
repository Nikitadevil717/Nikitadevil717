import React from 'react';
import classes from './MealsSummary.module.css'

const MealsSummary = props => {
    return (
        <section className={classes.summary}>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem est ipsam iure modi nam suscipit velit. Aut, in, quas?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores est, in itaque modi odio perferendis ratione sint suscipit unde.
            </p>
        </section>
    );
};

export default MealsSummary;