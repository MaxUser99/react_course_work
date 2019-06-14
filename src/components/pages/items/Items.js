import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import { connect } from "react-redux";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { startLoading } from "store/actions";
import { loadStatus } from "constants/loadStatus";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "50px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

const ItemsPage = ({ items, itemsLoadStatus, startLoading }) => {
  const styles = useStyles();
  useEffect(() => {
    if(itemsLoadStatus === loadStatus.NONE) {
      startLoading();
    }
  }, []);

  return (
    <div className={styles.root}>
      <GridList
        cols={5}
        cellHeight={180}
        spacing={10}
      >
        {
          items.map(item => {
            return (
              <GridListTile
                key={item.id}

                >
                <img
                  src={item.image}
                  alt=""
                />
                <GridListTileBar title={item.name} />
              </GridListTile>
            );
          })
        }
      </GridList>
    </div>
  );
};

const mapStateToProps = ({ items, itemsLoadStatus }) => ({
  items, itemsLoadStatus
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
