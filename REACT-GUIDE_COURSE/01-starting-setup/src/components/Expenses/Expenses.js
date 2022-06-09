import Card from "./UI/Card";
import './Expenses.css'
import React from 'react'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const
        {
            items
        } = props,
        [filter, setFilter] = React.useState('2020'),
        filterChangeHandler = value => {
            setFilter(value);
        },
        filteredExpenses = items.filter(expense => expense.date.getFullYear().toString() === filter);

    return (
        <Card
            className="expenses"
         >D
            <ExpensesFilter
                selected={filter}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart
                expenses={filteredExpenses}
            />
            <ExpensesList
                items={filteredExpenses}
            />
        </Card>
    )
}

export default Expenses;