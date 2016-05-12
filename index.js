
import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { runSaga } from 'redux-saga';
import { Provider } from 'react-redux';
import rootSaga from './sagas';
import {responsiveStoreEnhancer} from 'redux-responsive';

import App from './modules/App';

const createStoreWithMiddleware = compose(
    responsiveStoreEnhancer,
    applyMiddleware(sagaMiddleware(rootSaga)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}

const store = configureStore();

const root = document.getElementById('app');

/**
 * Bootstraps the application with Redux and Sagas for event handling
 * and side-effects (backend access).
 */
render(
	<Provider store={store}>
        <App/>
    </Provider>,
  	root
)

