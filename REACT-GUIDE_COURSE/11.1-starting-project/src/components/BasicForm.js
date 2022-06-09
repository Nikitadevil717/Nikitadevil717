import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
      value: firstNameValue,
      isValid: firstNameIsValid,
      hasError: firstNameHasError,
      valueChangeHandler: firstNameChangeHandler,
      inputBlurHandler: firstNameBlurHandler,
      reset: resetFirstName
    } = useInput(isNotEmpty);
  const {
      value: lastNameValue,
      isValid: lasttNameIsValid,
      hasError: lastNameHasError,
      valueChangeHandler: lastNameChangeHandler,
      inputBlurHandler: lastNameBlurHandler,
      reset: resetLasttName
    } = useInput(isNotEmpty);
  const {
      value: emailValue,
      isValid: emailIsValid,
      hasError: emailHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailName
    } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lasttNameIsValid && emailIsValid) {
      formIsValid = true;
  }

  const submitHandler = event => {
      event.preventDefault();

      if (!formIsValid) {
          return;
      }

      console.log('send all');
      console.log(firstNameValue, lastNameValue, emailValue);

      resetEmailName();
      resetFirstName();
      resetLasttName();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
              type='text'
              id='name'
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
          />
            {
                firstNameHasError && (
                    <p>enter first name</p>
                )
            }
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
              type='text'
              id='name'
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
          />
            {
                lastNameHasError && (
                    <p>enter last name</p>
                )
            }
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
            type='text'
            id='name'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
        />
          {
              emailHasError && (
                  <p>enter email addres</p>
              )
          }
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
