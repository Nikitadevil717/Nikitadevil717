import React from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const
        {
            onAddExpense
        } = props,
        [isEdiging, setIsEditing] = React.useState(false),
        saveExpenseDataHandler = (data) => {
            const expenseData = {
                ...data,
                id: Math.random().toString()
            };

            onAddExpense?.(expenseData);
            setIsEditing(false);
        },
        startEditingHandler = () => {
            setIsEditing(true);
        },
        stopEditingHandler = () => {
            setIsEditing(false)
        };

    return (
        <div
            className="new-expense"
        >
            {
                !isEdiging ? (
                    <button
                        onClick={startEditingHandler}
                    >
                        Add New Expense
                    </button>
                ) : (
                    <ExpenseForm
                        onCancel={stopEditingHandler}
                        onSaveExpenseData={saveExpenseDataHandler}
                    />
                )
            }
        </div>
    )
};

export default NewExpense;