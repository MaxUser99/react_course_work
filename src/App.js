import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {IndexPage, ItemsPage} from "./components/layout/mainContent";
import {route} from "./constants/routes";
import AppBar from "./components/layout/Header";
import Tabs from "@material-ui/core/Tabs";
import {LinkTab} from "./components/ui-kit";

function App() {
  const [current, currentChangeHandler] = useState(0);

  function changeHandler(e, val) {
    currentChangeHandler(val);
  }

  return (
    <div>
      <BrowserRouter>
        <AppBar position="relative">
          <Tabs value={current} variant="fullWidth" onChange={changeHandler}>
            <LinkTab label="Main" to={route.Index}/>
            <LinkTab label="Items" to={route.Items}/>
          </Tabs>
        </AppBar>
        <Route path={route.Items} component={ItemsPage}/>
        <Route path={route.Index} component={IndexPage} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
