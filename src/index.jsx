import React from 'react'
import ReactDOM from 'react-dom'

import { LocaleProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './reducers/reducers'
import Main from './theme/main'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render (
    <LocaleProvider locale={ptBR}>
        <Provider store={store}>
            <Main/>
        </Provider>
    </LocaleProvider>, 
    document.getElementById('app'))