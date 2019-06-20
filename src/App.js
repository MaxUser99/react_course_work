import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Header, Main, Footer} from "./components/layout";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import {store} from "store";
import "./general.css";
require('dotenv').config();

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      height: "100vh"
    }}>
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

export default App;
