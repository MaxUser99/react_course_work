import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField, Typography, InputAdornment } from "@material-ui/core";

const PageSwitch = ({ currentPage, pageCount, changeHandler }) => {
  function itemClickHandler({ target: { value }}) {
    changeHandler(value);
  }

  const menuItems = [];
  const menuItemsCount = pageCount === 0 ? 1 : pageCount;
  for (let i = 0; i < menuItemsCount; ++i) {
    menuItems.push(
      <MenuItem
        key={i}
        value={i}
        onClick={itemClickHandler}
      >
        <Typography color="textSecondary">{i + 1}</Typography>
      </MenuItem>);
  }

  return (
    <TextField
      select
      value={currentPage}
      onChange={itemClickHandler}
      InputProps={{
        startAdornment: <InputAdornment position="start">Page</InputAdornment>,
      }}
    >
      { menuItems }
    </TextField>
)};

export default PageSwitch;
