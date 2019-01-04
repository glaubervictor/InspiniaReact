import axios from 'axios'

export function minhaFuncao() {
    const request = axios.get('http://viacep.com.br/ws/74922800/json/')
    return {
        type: 'GET_CEP',
        payload: request
    }
}

export function setaStatusDoBotao(value) {
    return {
        type: 'SETA_BOTAO',
        payload: value
    }
}