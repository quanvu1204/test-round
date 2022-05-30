import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { authActions } from '../../services/controllers/auth/AuthActions';

export interface DashBoardProps {
  name?: string;
}

export interface StateProps {
  old?: number;
}

export type DashBoardType = DashBoardProps & StateProps;

const DashboardView = ({ name }: DashBoardType): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  console.log('location 1', location);

  return (
    <div>
      Dashboard
      <button type="button" onClick={() => history.push('/login')}>
        login
      </button>
    </div>
  );
};

export default DashboardView;
