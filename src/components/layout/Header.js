import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import {LinkTab} from "../ui-kit";
import {route} from "constants/routes";

const Header = (props) => {
  const [current, currentChangeHandler] = useState(() => {
    const { location : { pathname} } = props;
    const i = Object.values(route).indexOf(pathname);
    return i < 0 ? 0 : i;
  });

  function changeHandler(e, val) {
    currentChangeHandler(val);
  }

  return (
    <AppBar position="relative">
      <Tabs value={current} onChange={changeHandler}>
        <LinkTab label="Main" to={route.Index}/>
        <LinkTab label="Items" to={route.Items}/>
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);
