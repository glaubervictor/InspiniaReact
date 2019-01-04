const INITIAL_STATE = {
    meuCep: {},
    meuBotao: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CEP':
            return { ...state, meuCep: action.payload.data }
        case 'SETA_BOTAO':
            return { ...state, meuBotao: action.payload }
        default:
            return state
    }
}