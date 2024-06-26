import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutProvider } from './ReactContext/WorkoutContext';
import {AuthContextProvider} from './ReactContext/AuthContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkoutProvider>
    <App />
    </WorkoutProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
