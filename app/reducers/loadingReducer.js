/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import { LOGIN_ENABLE_LOADER, LOGIN_DISABLE_LOADER } from 'app/actions/loginActions';


const initialState = {
  isLoginLoading: false
};

export const loadingReducer = createReducer(initialState, {
  [LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  }
});
