import React from "react";
import {route} from "constants/routes";
import { MainPage, ItemsPage } from "../pages";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return(
    <div >
    <Switch>
      <Route path={route.Items} component={ItemsPage}/>
      <Route exact path={route.Index} component={MainPage}/>
      <Route render={() => <Redirect to={route.Index}/>} />
    </Switch>
    </div>
  );
};

export default Main;
