import React, {useEffect, useState} from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Fade from "@material-ui/core/Fade";
import { withRouter } from "react-router-dom";
import { route } from "constants/routes";
import { connect } from "react-redux";
import { changePage } from "store/actions";
import {makeStyles} from "@material-ui/core";
import EditDialog from "../dialogs/EditDialog";
import LoadingGif from "assets/loading.gif";
import ImageLoader from './ImageLoader';

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    alignContent: "flex-start",
    overflowX: "hidden",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  tile: {
    cursor: "pointer"
  },
  tileBar: {
    transition: "150ms",
    transitionTimingFunction: "easy-in",
  }
});

const ItemList = ({
  items, allItems, switchPage, perPage, history, match
}) => {
  const classes = useStyles();
  const [hoveredID, hoverChange] = useState(-1);
  const { params: { id : activePersonID } } = match;

  useEffect(() => {
    if (!activePersonID) return;

    const itemExistOnPage = items.some(({ id }) => id === +activePersonID);
    if (!itemExistOnPage) {
      const index = allItems.findIndex(x => x.id === +activePersonID);
      const targetPage = Math.floor(index / perPage);
      switchPage(targetPage);
    }
  })

  const hoverHandler = ({ currentTarget }) => {
    hoverChange(currentTarget.getAttribute("itemid"));
  };

  const unhoverHandler = () => hoverChange(-1);

  const tileClickHandler = ({ currentTarget }) => {
    const itemID = currentTarget.getAttribute("itemid");
    history.push(`${itemID}`);
  };

  const dialogCloseHandler = () => {
    history.push(route.Items);
  };

  const person = allItems.find(({ id }) => id === +activePersonID);

  return (
    <GridList
      className={classes.root}
      cols={5}
      cellHeight={180}
      spacing={20}
    >
      {
        items.map(item => {
          const flag = item.id === +hoveredID;
          return (
            <Fade
              key={item.id}
              in={true}
              timeout={1000}
            >
              <GridListTile
                className={classes.tile}
                onClick={tileClickHandler}
                itemID={item.id}
                onMouseOver={hoverHandler}
                onMouseLeave={unhoverHandler}
              >
                <ImageLoader
                    src={ item.image}
                    placeholder={LoadingGif}
                />
                <GridListTileBar
                  className={classes.tileBar}
                  title={item.name}
                  subtitle={flag && (
                    <Fade
                      in={true}
                      timeout={500}
                      style={{
                        transitionDelay: flag ? "150ms" : "0ms"
                      }}
                    >
                      <span>{ item.species }</span>
                    </Fade>)}
                />
              </GridListTile>
            </Fade>
          )
        })
      }

      <EditDialog
        isOpen={+activePersonID > 0}
        person={person}
        closeHandler={dialogCloseHandler}
      />
    </GridList>
  );
};

const mapStateToProps = state => ({
    allItems: state.items,
    perPage: state.perPage,
});

const mapDispatchToProps = dispatch => ({
  switchPage: (newPage) => dispatch(changePage(newPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemList));
