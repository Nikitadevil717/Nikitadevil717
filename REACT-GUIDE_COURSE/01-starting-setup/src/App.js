import React from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpsense'

const INITIAL_EXPENSES = [
        {
            id: 'e1',
            title: 'car Insurense1',
            amount: 149.53,
            date: new Date(2021, 2, 28)
        }, {
            id: 'e2',
            title: 'car Insurense2',
            amount: 249.53,
            date: new Date(2021, 5, 28)
        }, {
            id: 'e3',
            title: 'car Insurense3',
            amount: 149.53,
            date: new Date(2020, 2, 28)
        }, {
            id: 'e4',
            title: 'car Insurense4',
            amount: 59.53,
            date: new Date(2021, 3, 28)
        }
    ]

const App = () => {
    const
        [ expenses, setExpenses ] = React.useState(INITIAL_EXPENSES),
        addExpensesHandler = expense => {
            setExpenses(prevExpenses => {
                return [expense, ...prevExpenses]
            });
        };

  return (
    <React.Fragment>
        <NewExpense
            onAddExpense={addExpensesHandler}
        />
        <Expenses
            items={expenses}
        />
    </React.Fragment>
  );
}

export default App;
