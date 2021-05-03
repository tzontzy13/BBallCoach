import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'
import rootReducer from './root-reducer'

// developed using the redux documentation - this code is standard for almost all react redux projects
// https://redux.js.org/api/api-reference

// redux store
// middleware for sagas
// logger in development environment
// no logger in production (Firebase Hosting live app)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
   middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store