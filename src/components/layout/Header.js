import React from "react";
import { withRouter } from "react-router-dom";
import {LinkTab} from "components/ui-kit";
import {route} from "constants/routes";
import { connect } from "react-redux";
import { AppBar, Tabs, Avatar, makeStyles } from "@material-ui/core";
import { PermIdentity } from "@material-ui/icons";
import cx from "classnames";

const useStyles = makeStyles({
  root: {
    flexDirection: "row"
  },
  lastTab: {
    margin: 'auto 16px auto auto',
    backgroundColor: 'transparent'
  },
  img: {
    width: 40,
    height: 40,
    cursor: "pointer"
  },
  imgPlaceholder: {
    backgroundColor: 'transparent'
  }
});

const Header = ({ location : { pathname}, user }) => {
  const classes = useStyles();

  const currentRouteIndex = Object.values(route)
    .findIndex((r, i) => r.match(pathname) ? -1 : i);
  const activeTabIndex = currentRouteIndex === -1
    ? 0
    : currentRouteIndex;

  const userImgUrl = user.picture && user.picture.data.url;

  return (
    <AppBar className={classes.root} position="relative">
      <Tabs value={activeTabIndex}>
        <LinkTab label="Home" to={route.Index}/>
        <LinkTab label="Items" to={route.Items}/>
      </Tabs>
      <Avatar className={classes.lastTab}>
        {
          userImgUrl
            ? <img className={classes.img} alt='account image' src={userImgUrl} />
            : <PermIdentity className={cx(classes.img, classes.imgPlaceholder)} />
        }
      </Avatar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  user:       state.user
});

export default connect(mapStateToProps)(withRouter(Header));
