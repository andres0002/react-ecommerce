// js
// react
// third
// own
import { notification,timerNotification } from "../../../core/helpers/alert";
import { fetchWithoutToken,fetchWithToken } from "../../../core/helpers/fetch";
import { types } from "../../../core/types";

export const startLogin = (username, password) => {
    return async dispatch => {
        const response = await fetchWithoutToken(
            'auth/login/',
            {
                username,
                password
            },
            'POST'
        );

        if (!response) {
            notification('ERROR', 'No se pudo conectar con el servidor.', 'error');
            return;
        }

        const body = await response.json();

        if (response.status === 200 || response.status === 201) {
            // set user info
            localStorage.setItem('token', body.token);
            localStorage.setItem('username', body.user.username);
            localStorage.setItem('email', body.user.email);
            localStorage.setItem('name', body.user.name);
            localStorage.setItem('lastname', body.user.lastname);

            dispatch(login({
                token: body.token,
                username: body.user.username
            }));

            timerNotification('Inicio de session exitoso.');
        } else {
            notification('ERROR', body.error, 'error');
        }
    }
}

export const startChecking = () => {
    return async dispatch => {
        const response = await fetchWithToken('auth/refresh_token/');

        if (!response) {
            notification('ERROR', 'No se pudo conectar con el servidor.', 'error');
            return;
        }

        const body = await response.json();

        if (response.status === 200 || response.status === 201) {
            // set user info
            localStorage.setItem('token', body.token);
            localStorage.setItem('username', body.user.username);
            localStorage.setItem('email', body.user.email);
            localStorage.setItem('name', body.user.name);
            localStorage.setItem('lastname', body.user.lastname);

            dispatch(login({
                token: body.token,
                username: body.user.username
            }));
        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({type: types.authCheckingFinish})

const login = user => ({
    type: types.login,
    payload: user
})