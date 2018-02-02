import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

//import AuthReducer from './authReducers'

const rootReducer = combineReducers({
    form: reduxFormReducer
    //auth: AuthReducer
})

export default rootReducer