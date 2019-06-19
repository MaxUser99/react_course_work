import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import {LinkTab} from "components/ui-kit";
import {route} from "constants/routes";

const Header = ({ location : { pathname}, match }) => {
  const currentRouteIndex = Object.values(route).findIndex((r, i) => {
    const t = pathname.match(r);
    console.log("t: ", t);

    return pathname.match(r) ? i : -1
  });
  // const currentRouteIndex = Object.values(route).findIndex((r, i) => !!pathname.match(r));
  console.log("index: ", currentRouteIndex);
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
