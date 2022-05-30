import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import RouterWrapper from './common/routes/RouterWrapper';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouterWrapper />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
