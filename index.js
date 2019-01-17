/** @format */

import React from 'react'
import {AppRegistry} from 'react-native'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './src/App';
import {name as appName} from './app.json';
// Import the reducer and create a store
import {reducer} from './src/reducer/PostsReducer'

// Add the thunk middleware to our store
const store = createStore(reducer, applyMiddleware(thunk));

// Pass the store into the Provider
const AppWithStore = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
