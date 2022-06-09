import React from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = React.useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevState) => {
      return [...prevState, {
        id: Math.random().toString(),
        name: name,
        age: age
      }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList
        users={usersList}
      />
    </div>
  );
}

export default App;
