import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProggress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { startLoading } from "store/actions";
import { loadStatus } from "constants/loadStatus";
import { ItemList, ItemHeader } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  progress: {
    margin: "auto"
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
      <ItemHeader count={items.length}/>
      {
        items.length
          ? <ItemList items={items} />
          : <CircularProggress className={styles.progress}/>
      }
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
