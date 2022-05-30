import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardView from '../../views/dashboard/DashBoardView';
import LoginView from '../../views/login/LoginView';

export interface LoginProps {
  name?: string;
}

export interface StateProps {
  old?: number;
}

export type LoginType = LoginProps & StateProps;

const RouterWrapper = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/" component={DashboardView} />
      </Switch>
    </Router>
  );
};

export default RouterWrapper;
