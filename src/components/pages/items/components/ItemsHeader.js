import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PageSwitch from "./PageSwitch";
import { changePage } from "store/actions";

const ItemHeader = ({ showMenu, currentPage, pageCount, switchPage }) => {

  return (
    <Typography
      style={{
        textAlign: "right",
        width: "100%",
        margin: "16px"
      }}
      variant="h5"
      align="center"
      color="textSecondary"
      paragraph
    >
      <PageSwitch
        currentPage={currentPage}
        pageCount={pageCount}
        changeHandler={switchPage}
      />
    </Typography>
  );
};

const mapStateToProps = state => ({
  showMenu: state.items.length > state.perPage,
  currentPage: state.currentPage,
  pageCount: Math.ceil(state.items.length / state.perPage)
});

const mapDispatchToProps = dispatch => ({
  switchPage: (newPage) => dispatch(changePage(newPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemHeader);
