import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Fade from "@material-ui/core/Fade";

const ItemList = ({items}) => {
  return (
    <GridList
      style={{
        alignItems: "flex-start",
        alignContent: "flex-start",
        overflowX: "hidden",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
      cols={5}
      cellHeight={180}
      spacing={10}
    >
      {
        items.map(item => {
          return (
              <Fade key={item.id} in={true} timeout={1000}>
                <GridListTile>
                  <img src={item.image} alt="item"/>
                  <GridListTileBar title={item.name}/>
                </GridListTile>
              </Fade>
          )
        })
      }
    </GridList>
  );
};

export default ItemList;
