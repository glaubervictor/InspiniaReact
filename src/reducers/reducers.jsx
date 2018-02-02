import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import menuReducer from './menuReducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    menu: menuReducer
})

export default rootReducer