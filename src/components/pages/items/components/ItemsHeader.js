import React from "react";
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import PageSwitch from "./PageSwitch";
import {changePage} from "store/actions";

const ItemHeader = ({currentPage, pageCount, switchPage, filterName}) => (
  <div style={{
    padding: "0 20px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  }}>
    <TextField
      style={{marginRight: "20px"}}
      margin="dense"
      placeholder="search by name"
      onChange={filterName}
    />
    <PageSwitch
      currentPage={currentPage}
      pageCount={pageCount}
      changeHandler={switchPage}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  switchPage: (newPage) => dispatch(changePage(newPage))
});

export default connect(null, mapDispatchToProps)(ItemHeader);
