import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Welcome from './pages/Welcome';
import PageNotFound from './pages/PageNotFound';


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={Login}
            />
            <Route
              exact
              path="/welcome"
              component={Welcome}
            />
            <Route
              exact
              path=""
              component={PageNotFound}
            />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;