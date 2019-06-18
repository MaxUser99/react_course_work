import React, {useState} from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Fade from "@material-ui/core/Fade";
import { CardDialog } from "../dialogs";

const ItemList = ({ items }) => {
  const [hoveredID, hoverChange] = useState(-1);
  const [activePersonID, onActivePersonIDChange] = useState(0);

  const hoverHandler = (e) => {
    hoverChange(e.currentTarget.getAttribute("itemid"));
  };
  const unhoverHandler = () => hoverChange(-1);
  const tileClickHandler = ({ currentTarget }) => {
    const itemID = currentTarget.getAttribute("itemid");
    onActivePersonIDChange(itemID);
  };

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
      spacing={20}
    >
      {
        items.map(item => {
          const flag = item.id == hoveredID;
          return (
            <Fade key={item.id} in={true} timeout={1000}>
              <GridListTile
                onClick={tileClickHandler}
                itemID={item.id}
                onMouseOver={hoverHandler}
                onMouseLeave={unhoverHandler}
              >
                <img
                  src={item.image}
                  alt="item"
                />
                  <GridListTileBar
                    style={{
                      transition: "150ms",
                      transitionTimingFunction: "easy-in",
                    }}
                    title={item.name}
                    subtitle={flag && (
                      <Fade
                        in={true}
                        timeout={500}
                        style={{ transitionDelay: flag ? "150ms" : "0ms"}}
                      >
                        <span>{ item.species }</span>
                      </Fade>)}
                  />
              </GridListTile>
            </Fade>
          )
        })
      }
      <CardDialog
        isOpen={activePersonID > 0}
        personId={activePersonID}
        closeHandler={() => onActivePersonIDChange(0)}
        flag={activePersonID > 0}
      />
    </GridList>
  );
};

function areEqual({ items : prevItems }, { items : newItems }) {
  const equalLengths = prevItems.length === newItems.length;
  return equalLengths && newItems.reduce(
    (flag, item, i) => (flag && item === prevItems[i]),
    true
  );
}

export default React.memo(ItemList, areEqual);
