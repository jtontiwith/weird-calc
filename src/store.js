import { createStore, compose, applyMiddleware } from 'redux';
import appReducer from './Reducers';
import thunk from 'redux-thunk';  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancer(applyMiddleware(thunk)));
