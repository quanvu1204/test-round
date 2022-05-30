import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apiServices';
import { authActions } from './AuthActions';
import { loginSuccess, loginError } from './AuthSlice';

function* loginSaga(action: any): any {
  try {
    const data = yield call(api.auth.login, action.payload);
    yield put(loginSuccess(data));
  } catch (error) {
    loginError();
  }
}

export function* authSaga() {
  yield takeLatest(authActions.login, loginSaga);
}
