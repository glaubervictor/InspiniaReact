import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import menuReducer from './menuReducer'
import testeReducer from './testeReducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    menu: menuReducer,
    teste: testeReducer
})

export default rootReducer