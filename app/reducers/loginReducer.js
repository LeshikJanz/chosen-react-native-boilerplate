/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import { LOGIN_REQUEST, LOGIN_LOADING_ENDED, LOGIN_RESPONSE, LOGIN_FAILED } from 'app/actions/loginActions';

const initialState = {
  isLoggedIn: false,
  id: -1,
  username: '',
  password: ''
};

export const loginReducer = createReducer(initialState, {
  [LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password
    };
  },
  [LOGIN_LOADING_ENDED](state) {
    return { ...state };
  },
  [LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      id: action.response.id
    };
  },
  [LOGIN_FAILED](state) {
    return {
      ...state,
      isLoggedIn: false
    };
  }
});
