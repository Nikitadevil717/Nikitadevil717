import React from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
  const
      [enteredName, setEnteredName] = React.useState(''),
      [enteredAge, setEnteredAge] = React.useState(''),
      [error, setError] = React.useState(null),
      addUserHandler = (event) => {
          event.preventDefault();
          if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
              setError({
                  title: 'Invalid input',
                  message: 'Plesaes enter a valid name and age'
              });

              return;
          }

          if(+enteredAge < 1) {
              setError({
                  title: 'Invalid age',
                  message: 'Plesaes enter a valid age (> 0)'
              });

              return;
          }

          props.onAddUser?.(enteredName, enteredAge);
          setEnteredName('');
          setEnteredAge('');

      },
      userChangeHandler = event => {
        setEnteredName(event.target.value);

      },
      ageChangeHandler = event => {
        setEnteredAge(event.target.value)
      },
      errorHandler = () => {
          setError(null);
      };



  return (
      <React.Fragment>
          {
              error && (
                  <ErrorModal
                      title={error.title}
                      message={error.message}
                      onConfirm={errorHandler}
                  />
              )
          }
          <Card className={classes.input}>
              <form onSubmit={addUserHandler}>
                  <label htmlFor="username">Username</label>
                  <input
                      id="username"
                      type="text"
                      value={enteredName}
                      onChange={userChangeHandler}
                  />
                  <label htmlFor="age">Age (Years)</label>
                  <input
                      id="age"
                      type="number"
                      value={enteredAge}
                      onChange={ageChangeHandler}
                  />
                  <Button type="submit">Add User</Button>
              </form>
          </Card>
      </React.Fragment>
  )
};

export default AddUser;