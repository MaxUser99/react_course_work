import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import {LinkTab} from "../ui-kit";
import {route} from "constants/routes";
import Tabs from "@material-ui/core/Tabs";
import { withRouter } from "react-router-dom";

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
      <Tabs value={current} variant="fullWidth" onChange={changeHandler}>
        <LinkTab label="Main" to={route.Index}/>
        <LinkTab label="Items" to={route.Items}/>
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);
