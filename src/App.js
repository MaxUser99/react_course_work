import React from 'react';
import {BrowserRouter } from "react-router-dom";
import { Header, Main } from "./components/layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
