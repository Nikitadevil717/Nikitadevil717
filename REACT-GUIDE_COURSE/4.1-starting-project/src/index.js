import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import App from './App';
import {AuthContextProvider} from "./components/context/auth-context";

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
    );
