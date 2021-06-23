import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Repo from './views/Repo';
import theme from './theme/index'

const hist = createBrowserHistory();

function App() {
  return (
      <MuiThemeProvider theme={theme}>
      <Router history={hist}>
        <Switch>
          <Route path="/repo" component={Repo} />
          {/* add routes here */}
        </Switch>
      </Router>
      </MuiThemeProvider>
    );
}

export default App;