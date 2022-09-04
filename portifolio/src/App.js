import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Welcome from './pages/Welcome';


class App extends React.Component {
  render() {
    return (
      <div>

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
        </BrowserRouter>
      </div>

    );
  }
}

export default App;