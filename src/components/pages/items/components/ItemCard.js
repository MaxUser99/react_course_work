import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import blankImage from "assets/BlankPage.jpg";

const ItemCard = ({ person }) => {
  return (
    <GridListTile>
      <img src={person.image} alt=""/>
      <GridListTileBar
        title={person.name}
      />
    </GridListTile>
  );
};

export default ItemCard;
