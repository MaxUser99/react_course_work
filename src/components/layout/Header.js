// import React, { useState } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import { LinkTab } from "components/ui-kit";
// import { route } from "constants/routes";
// import { withRouter } from "react-router";
//
// const Header = (props) => {
//   console.log("props: ", props)
//
//   const [current, currentChangeHandler ] = useState(0);
//
//   function changeHandler(e, val) {
//     currentChangeHandler(val);
//   }
//
//   return (
//     <AppBar position="relative" >
//       <Tabs value={current} variant="fullWidth" onChange={changeHandler}>
//         <LinkTab label="Main" to={route.Index} />
//         <LinkTab label="Items" to={route.Items} />
//       </Tabs>
//     </AppBar>
//   );
// };
//
// // export default Header;
// export default withRouter(Header);
