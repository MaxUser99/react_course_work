import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import {LinkTab} from "components/ui-kit";
import {route} from "constants/routes";

const Header = ({ location : { pathname} }) => {
  const currentRouteIndex = Object.values(route).findIndex((r, i) => r.match(pathname) ? -1 : i);
  const activeTabIndex = currentRouteIndex < 0 ? 0 : currentRouteIndex;

  return (
    <AppBar position="relative">
      <Tabs value={activeTabIndex}>
        <LinkTab label="Home" to={route.Index}/>
        <LinkTab label="Items" to={route.Items}/>
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);
