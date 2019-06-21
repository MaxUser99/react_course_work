import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import {LinkTab} from "components/ui-kit";
import {route} from "constants/routes";
import { connect } from "react-redux";

const Header = ({ location : { pathname}, userStatus }) => {
  const currentRouteIndex = Object.values(route).findIndex((r, i) => r.match(pathname) ? -1 : i);
  const activeTabIndex = currentRouteIndex < 0 ? 0 : currentRouteIndex;

  return (
    <AppBar position="relative">
      <Tabs value={activeTabIndex}>
        <LinkTab label="Home" to={route.Index}/>
        <LinkTab label="Items" to={route.Items}/>
        <LinkTab label={userStatus} to="#"/>
      </Tabs>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  userStatus: state.userStatus
});

export default connect(mapStateToProps)(withRouter(Header));
