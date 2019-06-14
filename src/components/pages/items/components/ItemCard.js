import React, { useState } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   itemCard: {
//     // margin: "5px"
//   }
// }));

const ItemCard = ({ person }) => {
  // const styles = useStyles();

  // const [hovered, setHoverState] = useState(false);
  // const onHover = () => { setHoverState(true)};
  // const onUnHover = () => { setHoverState(false)};


  return (
    <GridListTile
      cols={3}
      // onMouseOver={onHover}
      // onMouseLeave={onUnHover}
    >
      <img
        src={person.image}
        alt=""
      />
    </GridListTile>
  );
};
{/*<Fade*/}
{/*in={hovered}>*/}
{/*<GridListTileBar*/}
{/*title={person.name}*/}
{/*/>*/}
{/*</Fade>*/}
export default ItemCard;
