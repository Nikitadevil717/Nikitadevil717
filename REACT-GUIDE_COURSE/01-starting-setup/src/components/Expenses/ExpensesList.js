import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    const
        {
            items
        } = props;

    return (
        <React.Fragment>
            {
                !items.length ? (
                    <h2 className="expenses-list__fallback">
                        Found no expenses.
                    </h2>
                ) : (
                    <ul
                        className="expenses-list"
                    >
                        {
                            items.map(expense => (
                                <ExpenseItem
                                    key={expense.id}
                                    item={expense}
                                />
                            ))
                        }
                    </ul>
                )
            }
        </React.Fragment>
    )
};

export default ExpensesList;