import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import { route } from "constants/routes";
import { FacebookButton } from "components/ui-kit";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    width: "100%"
  }
}));

const MainPage = ({ history, userName }) => {
  const classes = useStyles();

  const continueClickHandler = () => {
    history.push(route.Items);
  };

  return (
    <Container className={classes.mainContent} maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Course Work App
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Welcome to my short and convinient course work app, also created on React
        with some 3d party libraries, such as redux, saga, axios and material-ui
      </Typography>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item xs>
            <FacebookButton className={classes.button} />
          </Grid>
          <Grid item xs>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={continueClickHandler}>
              Continue as { userName }
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  userName: state.user.name
    ? state.user.name
    : "guest"
});

export default connect(mapStateToProps)(MainPage);
