
import React from 'react';
import './compiled/style.css';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import PropTypes from 'prop-types'

import App from './components/App';
import Test from './components/Test';

const Root = ({ store }) => (
      <BrowserRouter>
        <App />
      </BrowserRouter>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
