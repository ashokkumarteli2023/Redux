// Importing necessary dependencies and functions from external libraries and files
import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';

// Creating a Redux store with middleware
// The store is where the application state is stored and managed

// `legacy_createStore` is a function provided by Redux to create the store
// `reducers` is an object that defines how the state should be updated based on actions
// `{}` is the initial state of the application
// `applyMiddleware(thunk)` is a middleware that enables the use of asynchronous actions in Redux
export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk));
