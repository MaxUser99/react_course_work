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
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  progress: {
    margin: "auto",
    position: "absolute",
    top: "50%"
  }
}));

const ItemsPage = (props) => {
  const { items, perPage, currentPage } = props;
  const styles = useStyles();
  useEffect(() => {
    const { itemsLoadStatus, startLoading } = props;
    if(itemsLoadStatus === loadStatus.NONE) {
      startLoading();
    }
  }, []);

  const begin = perPage * currentPage;
  const end = begin + perPage;
  const itemsToShow = items.slice(begin, end);
  return (
    <div className={styles.root}>
      <ItemHeader/>
      {
        itemsToShow.length
          ? <ItemList items={itemsToShow} />
          : <CircularProggress className={styles.progress}/>
      }
    </div>
  );
};

const mapStateToProps = ({ items, itemsLoadStatus, perPage, currentPage }) => ({
  items, itemsLoadStatus, perPage, currentPage
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
