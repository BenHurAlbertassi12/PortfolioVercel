import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Welcome from './pages/Welcome';
import PageNotFound from './pages/PageNotFound';


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
  }
}

export default App;