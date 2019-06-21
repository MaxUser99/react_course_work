import React, {useEffect, useState} from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { LOGIN_STATUS } from "constants/userStatus";
import { Button } from "@material-ui/core";
import { login, logout } from "store/actions";
import { connect } from "react-redux";

const FacebookButton = ({ login, logout }) => {
  const [FB, setFBApi] = useState(window.FB);
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.UNKNOWN);

  useEffect(() => {
    if (FB) {
      FB.Event.subscribe("auth.statusChange", ({ status }) => {
        setLoginStatus(status);
        if(status === LOGIN_STATUS.UNKNOWN)
          logout();
      });
    } else {
      const interval = setInterval(() => {
        if(window.FB) {
          clearInterval(interval);
          setFBApi(window.FB);
        }
      }, 500);
    }
  }, [FB]);

  const fbLogout = () => {
    console.log("click")
    FB.logout(() => {console.log("callback")});
  };

  const handleResponseFacebook = (response) => {
    console.log("response: ", response);
    login(response, loginStatus);
  };

  return (
    <FacebookLogin
      appId="188071835431986"
      autoLoad={false}
      fields="name,email,picture"
      scope="public_profile"
      callback={handleResponseFacebook}
      render={props => {
        const { onClick, isProcessing,  isSdkLoaded } = props; // isDisabled, isProcessing,
        const text = loginStatus === LOGIN_STATUS.CONNECTED ? "Logout" : "Login";
        const clickHandler = loginStatus === LOGIN_STATUS.CONNECTED ? fbLogout : onClick;
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={clickHandler}
            disabled={!isSdkLoaded}
          >
            { isProcessing ? "loading..."  : text}
          </Button>
        )}}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  login: (user, status) => dispatch(login(user, status)),
  logout: (status) => dispatch(logout(status))
});

export default connect(null, mapDispatchToProps)(FacebookButton);
