import React, {useEffect, Suspense} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CircularProggress from "@material-ui/core/CircularProgress";
import {connect} from "react-redux";
import { startLoading, filterItems } from "store/actions";
import {loadStatus} from "constants/loadStatus";
import {ItemList} from "./components";
import { ItemHeader } from "./components";

// const ItemHeader = React.lazy(() => import("./components/ItemsHeader"));

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
  const {items, perPage, currentPage, filters, applyNameFilter} = props;
  const styles = useStyles();
  useEffect(() => {
    const {itemsLoadStatus, startLoading} = props;
    if (itemsLoadStatus === loadStatus.NONE) {
      startLoading();
    }
    // eslint-disable-next-line
  }, []);

  const nameFilterChangeHandler = ({ target : {value} }) => { applyNameFilter(value) };

  const filteredItems = Object.entries(filters).reduce(
    (filtered, [key, value]) => filtered.filter(
      ({[ key ]: propVal}) => propVal.toLowerCase().includes(value.toLowerCase())
    ),
    items
  );

  const begin = perPage * currentPage;
  const end = begin + perPage;
  const itemsToShow = filteredItems.slice(begin, end);
  console.log('items: ', itemsToShow);
  return (
    <div className={styles.root}>
      <ItemHeader
        currentPage={currentPage}
        pageCount={Math.ceil(filteredItems.length / perPage)}
        filterName={nameFilterChangeHandler}
      />
      {/*
        itemsToShow.length
          ? <ItemList items={itemsToShow} />
          : <CircularProggress className={styles.progress}/>
      */}
      <ItemList items={itemsToShow} />
    </div>
  );
};

const mapStateToProps = ({items, itemsLoadStatus, perPage, currentPage, filters}) => ({
  items, itemsLoadStatus, perPage, currentPage, filters
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  applyNameFilter: value => dispatch(filterItems("name", value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
