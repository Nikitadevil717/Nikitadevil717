import classes from './Checkout.module.css';
import {useRef, useState} from "react";

const isEmpty = value => value.trim() === '';
const isNotFiveChars= value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeEntered = !isNotFiveChars(enteredPostal);

        setFormInputsValidity({
            name: enteredNameIsValid,
            city: enteredCityIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeEntered
        });

        const formIsValid =
            enteredNameIsValid
            && enteredStreetIsValid
            && enteredCityIsValid
            && enteredPostalCodeEntered;



        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostal
        });
    };

    const controlClasses = (validity) => {
        return (
            `${classes.control} ${validity ? '' : classes.invalid}`
        )
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={controlClasses(formInputsValidity.name)}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {
                    !formInputsValidity.name && (
                        <p>entered name</p>
                    )
                }
            </div>
            <div className={controlClasses(formInputsValidity.street)}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {
                    !formInputsValidity.street && (
                        <p>entered street</p>
                    )
                }
            </div>
            <div className={controlClasses(formInputsValidity.postalCode)}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {
                    !formInputsValidity.postalCode && (
                        <p>entered postal</p>
                    )
                }
            </div>
            <div className={controlClasses(formInputsValidity.city)}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {
                    !formInputsValidity.city && (
                        <p>entered city</p>
                    )
                }
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;