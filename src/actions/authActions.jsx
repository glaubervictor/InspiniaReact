import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../helpers/consts'

export function login(values) {
    return submit(values, `${consts.API_URL}/autenticacao/login`)
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}

export function validateToken(token) {
    return dispatch => {
        if(token) {
            axios.post(`${consts.API_URL}/autenticacao/token-valido`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data })
                })
                .catch(e => 
                    dispatch({ type: 'TOKEN_VALIDATED', payload: false 
                }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}