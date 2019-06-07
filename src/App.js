import React from 'react';
import {BrowserRouter, Route, Redirect } from "react-router-dom";
import {IndexPage, ItemsPage} from "./components/layout/mainContent";
import {route} from "./constants/routes";
import { Header } from "./components/layout";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path={route.Items} component={ItemsPage}/>
          <Route exact path={route.Index} component={IndexPage}/>
          <Route render={() => <Redirect to={route.Index}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
