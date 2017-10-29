import React from 'react';
import ReactDOM from 'react-dom';
import './compiled/style.css';
import { Router, Route, Link } from 'react-router';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';
import reducers from './reducers';

let store = createStore(rootReducer)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>

        <Root store={store} />

      </Provider>
    </AppContainer>
    ,document.getElementById('root')
  )
}

render(Root)


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
