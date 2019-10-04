import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Header, Main, Footer} from "./components/layout";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import {store} from "store";
import { withStyles } from "@material-ui/core";

import "./general.css";
require('dotenv').config();

const styles = {
  root: {
    minHeight: "100vh",
    height: "100vh"
  }
};

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline>
            <Header/>
            <Main/>
            <Footer/>
          </CssBaseline>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default withStyles(styles)(App);
