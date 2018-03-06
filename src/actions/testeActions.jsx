import axios from 'axios'

export function minhaFuncao() {
    const request = axios.get('http://viacep.com.br/ws/01001000/json/')
    return {
        type: 'GET_CEP',
        payload: request
    }
}