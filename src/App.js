import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Header, Main} from "./components/layout";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from "react-redux";
import { store } from "store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <CssBaseline>
          <Header/>
          <Main/>
        </CssBaseline>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
