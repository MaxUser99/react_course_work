import React from "react";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const LinkTab = props => (
  <Tab
    component={Link}
    {...props}
  />
);

export default LinkTab;
