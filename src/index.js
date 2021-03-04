import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import {Provider } from 'react-redux'
import reducer from  './reducers'
import Home from './pages/Home'
import Modal from 'react-modal'

let store = createStore(reducer , 
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true}))



let App = () => <Home />

Modal.setAppElement('#root')


ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>
, document.querySelector('#root'))