// @flow

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function requestLogin(username: string, password: string) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}

export const LOGIN_FAILED = 'LOGIN_FAILED';
export function loginFailed() {
  return {
    type: LOGIN_FAILED
  };
}

export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export function onLoginResponse(response: Object) {
  return {
    type: LOGIN_RESPONSE,
    response
  };
}

export const LOGIN_ENABLE_LOADER = 'LOGIN_ENABLE_LOADER';
export function enableLoader() {
  return {
    type: LOGIN_ENABLE_LOADER
  };
}

export const LOGIN_DISABLE_LOADER = 'LOGIN_DISABLE_LOADER';
export function disableLoader() {
  return {
    type: LOGIN_DISABLE_LOADER
  };
}
