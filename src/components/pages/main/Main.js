import React, { useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import { route } from "constants/routes";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const LOGIN_STATUS = {
  CONNECTED: "connected",
  NOT_AUTHORIZED: "not_authorized",
  UNKNOWN: "unknown"
};

const useStyles = makeStyles(theme => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const MainPage = ({ history }) => {
  const [FB, setApiFlag] = useState(window.FB);
  const [fbAuthResp, setfbAuthResp] = useState(null);
  const [loginStatus, setLoginStatus] = useState(null);

  const continueClickHandler = () => {
    history.push(route.Items);
  };

  function FBcall (f) {
    if (FB)
      return f();
  }

  function updataStatus() {
    if ()
  }

  useEffect(() => {
    if (FB) {
      FB.getLoginStatus((r) => {
        console.log("login status: ", r.status === LOGIN_STATUS.CONNECTED);
        setfbAuthResp(r.authResponse);
      });
      FB.Event.subscribe("auth.login", (r) => {
        console.log("auth login event handled: ", r)
      });
    } else {
      const interval = setInterval(() => {
        if(window.FB) {
          clearInterval(interval);
          setApiFlag(window.FB);
        }
      }, 500);
    }
  }, [FB]);

  const fbLogout = () => {
    FB.logout((r) => {
      console.log("r: ", r);
    });
  };

  const responseFacebook = (response) => {
    console.log(response);
    // console.log("login response handled");
  };

  const classes = useStyles();
  return (
    <Container className={classes.mainContent} maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Course Work App
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Welcome to my chort and convinient course work app, also created on React
        with some 3d party libraries, such as redux, saga, axios and material-ui
      </Typography>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <FacebookLogin
              appId="188071835431986"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile"
              callback={responseFacebook}
              render={props => {
                const { onClick, isDisabled, isProcessing, isSdkLoaded } = props;
                // console.log("props: ", props)
                return (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onClick}
                  disabled={!isSdkLoaded}
                >
                  Login via Facebook
                </Button>
              )}}
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={continueClickHandler}>
              Continue as guest
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={fbLogout}>
              logout
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
// */

export default MainPage;
