const key = 'token'
const INITIAL_STATE = {
    token: JSON.parse(localStorage.getItem(key)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if(action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(key)
                return { ...state, validToken: false, token: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(key, JSON.stringify(action.payload))
            return { ...state, token: action.payload, validToken: true }
    }
}