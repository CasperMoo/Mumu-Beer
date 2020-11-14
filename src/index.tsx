import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { Reducers, Sagas } from './redux/reducer'
import PageContainer from './components/PageContainer'

import './index.css'
import 'antd/dist/antd.css'

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(Reducers, enhancer)
sagaMiddleware.run(Sagas)

ReactDOM.render(
  <Provider store={store}>
    <PageContainer />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
