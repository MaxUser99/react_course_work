import React from "react";
import AuthDialog from "./AuthDialog";
import EditDialog from "./EditDialog";

// const CardDialog = ({ flag, ...props }) => flag ? <EditDialog {...props} /> : <AuthDialog {...props}/>;
const CardDialog = (props) => <EditDialog {...props} />

export default CardDialog;
