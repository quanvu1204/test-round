import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { authActions } from '../../services/controllers/auth/AuthActions';

export interface LoginProps {
  name?: string;
}

export interface StateProps {
  old?: number;
}

export type LoginType = LoginProps & StateProps;

const LoginView = ({ name }: LoginType): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  console.log('location 2', location);
  return (
    <div>
      <button type="button" onClick={() => dispatch(authActions.login({ username: 'hihi', password: 'peterone1998' }))}>
        Getdata
      </button>
      <button type="button" onClick={() => history.push('/')}>
        login
      </button>
    </div>
  );
};

export default LoginView;
