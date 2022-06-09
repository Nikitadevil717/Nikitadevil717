import React, {useEffect, useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1') {
            setIsloggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        setIsloggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    const loginHandler = () => {
        setIsloggedIn(true);
        localStorage.setItem('isLoggedIn', '1');
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;