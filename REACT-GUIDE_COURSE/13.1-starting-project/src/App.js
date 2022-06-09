import Counter from './components/Counter';
import {useSelector} from "react-redux";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import {Fragment} from 'react';


function App() {
  const {
    auth: {
      isAuthenticated
    }
  } = useSelector(state => state);

  return (
      <Fragment>
        <Header/>
        {
          !isAuthenticated && (
              <Auth/>
          )
        }
        {
          isAuthenticated && (
              <UserProfile/>
          )
        }
        <Counter />
      </Fragment>
  );
}

export default App;
