import { app } from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];   //storing the function in an array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
