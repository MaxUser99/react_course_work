import React from "react";
import AuthDialog from "./AuthDialog";
import EditDialog from "./EditDialog";

const CardDialog = ({ flag, ...props }) => flag ? <EditDialog {...props} /> : <AuthDialog {...props}/>;

export default CardDialog;
