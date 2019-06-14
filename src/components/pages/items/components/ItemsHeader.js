import React from "react";
import Typography from "@material-ui/core/Typography";

const ItemHeader = ({ count  }) => {
  return (
    <Typography
      style={{
        textAlign: "center",
        width: "100%",
        margin: "16px"
      }}
      variant="h5"
      align="center"
      color="textSecondary"
      paragraph
    >
      Items is currently on load. Already loaded: {count}
    </Typography>
  );
};

export default ItemHeader;
