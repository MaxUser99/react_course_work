import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import { connect } from "react-redux";
import { startLoading } from "store/actions";
import { loadStatus } from "constants/loadStatus";
import { ItemCard } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
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
  console.log("items: ", items);
  return (
    <div>
      <GridList>
        {
          items.map(item => <ItemCard key={item.id} person={item}/>)
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
