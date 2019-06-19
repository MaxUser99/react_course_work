import React from "react";
import {Dialog, withMobileDialog} from "@material-ui/core";

const AuthDialog = ({ fullScreen, isOpen, closeHandler }) => {

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      onClose={closeHandler}
      open={isOpen}
    ></Dialog>
  );
};

export default withMobileDialog()(AuthDialog);
