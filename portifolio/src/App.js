import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={ Login } />
        <Route
          exact
          path='/Welcome'
          component={Welcome}
        />
        <Route
          exact
          path='/Sobre'
          component={Sobre}
        />
        <Route
          exact
          path='/Contato'
          component={Contato}
        />
        <Route
          exact
          path='/Projetos'
          component={Projetos}
        />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
