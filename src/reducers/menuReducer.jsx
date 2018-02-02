const INITIAL_STATE = {
    collapsed: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'COLLAPSE_MENU':
            return { ...state, collapsed: action.payload }
        default:
            return state
    }
}