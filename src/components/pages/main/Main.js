import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { route } from "constants/routes";
import actionTypes from "../../../store/actionTypes";

const useStyles = makeStyles(theme => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const MainPage = ({ history, trySaga }) => {
  const continueClickHandler = () => {
    history.push(route.Items);
  };

  const classes = useStyles();
  return (
    <Container className={classes.mainContent} maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Course Work App
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Welcome to my chort and convinient course work app, also created on React and
        with some 3d party libraries, such as redux, saga, axios and material-ui
      </Typography>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={trySaga}>
              Login by Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={continueClickHandler}>
              Continue as guest
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  trySaga: () => dispatch({ type: actionTypes.LOAD })
});

export default connect(null, mapDispatchToProps)(MainPage);
