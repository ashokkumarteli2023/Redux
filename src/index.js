// Importing necessary dependencies and files
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './State/store';

// Creating a root element using ReactDOM
// This element will be used as the root container for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React application
// The application is wrapped in a <React.StrictMode> component

// The <Provider> component is used to provide the Redux store to the application
// The Redux store is passed as a prop named "store" to the <Provider> component
// The <App> component represents the main component of the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
