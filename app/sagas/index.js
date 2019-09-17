import { takeEvery, all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import { LOGIN_REQUEST } from 'app/actions/loginActions';

export default function* watch() {
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
}
