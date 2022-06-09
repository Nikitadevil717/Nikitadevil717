import React from 'react';
import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItemFrom = props => {
    const [amountIsValid, setAmountIsValid] = React.useState(true);

    const amountInputRef = React.useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        if(!amountIsValid) {
            setAmountIsValid(true);
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    type: 'number',
                    id: `amount_${props.id}`,
                    step: '1',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
};

export default MealItemFrom;