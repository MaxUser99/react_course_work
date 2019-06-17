import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menu: {
  //   maxHeight: "300px",
  //   backgroundColor: "red "
  },
  menuItem: {
    // textAlign: "center",
    // display: "flex",
    // justifyContent: "center",
    // width: "48px"
  }
}));

const PageSwitch = ({ currentPage, pageCount, changeHandler }) => {
  const styles = useStyles();
  const menuID = "items-page-count";

  const [anchor, setAnchor] = useState(null);

  function handleClick({ currentTarget }) {
    setAnchor(currentTarget);
  }

  function handleClose() {
    setAnchor(null);
  }

  function itemClickHandler({ currentTarget: { value }}) {
    changeHandler(value);
    handleClose();
  }

  const menuItems = [];
  for (let i = 0; i < pageCount; ++i) {
    menuItems.push(
      <MenuItem
        key={i}
        value={i}
        onClick={itemClickHandler}
        classes={{root: styles.menuItem}}
      >
        <Typography color="textSecondary">{i + 1}</Typography>
      </MenuItem>);
  }

  return (
  <React.Fragment>
    <span> page: </span>
    <Button
      aria-controls={menuID}
      aria-haspopup={true}
      onClick={handleClick}
    >
      <Typography color="textSecondary">{ currentPage + 1 }</Typography>
    </Button>
    <Menu
      id={menuID}
      anchorEl={anchor}
      keepMounted
      open={Boolean(anchor)}
      onClose={handleClose}
      className={{ paper: styles.menu, list: styles.menu }}
    >
      { menuItems }
    </Menu>
  </React.Fragment>
)};

export default PageSwitch;
