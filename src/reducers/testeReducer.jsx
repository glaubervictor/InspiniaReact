const INITIAL_STATE = {
    meuCep: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CEP':
            return { ...state, meuCep: action.payload.data }
        default:
            return state
    }
}