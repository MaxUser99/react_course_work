import React, {useEffect, useState} from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { LOGIN_STATUS } from "constants/userStatus";
import { Button } from "@material-ui/core";
import { login, logout } from "store/actions";
import { connect } from "react-redux";

const FacebookButton = ({ login, logout, loginStatus }) => {
  const [FB, setFBApi] = useState(window.FB);

  useEffect(() => {
    if (FB) {
      FB.Event.subscribe("auth.statusChange", ({ status }) => {
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
    FB.logout(() => {console.log("callback")});
  };

  const handleResponseFacebook = (response) => {
    login(response, loginStatus);
  };

  return (
    <FacebookLogin
      appId="188071835431986"
      autoLoad={false}
      fields="name,email,picture"
      scope="public_profile"
      callback={handleResponseFacebook}
      render={({ onClick, isProcessing,  isSdkLoaded }) => {
        const text = loginStatus === LOGIN_STATUS.CONNECTED
          ? "Logout"
          : "Login";
        const clickHandler = loginStatus === LOGIN_STATUS.CONNECTED
          ? fbLogout
          : onClick;
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={clickHandler}
            disabled={!isSdkLoaded}
          >
            {
              isProcessing
                ? "loading..."
                : text
            }
          </Button>
        )}}
    />
  );
};

const mapStateToProps = state => ({
  loginStatus: state.userStatus
});

const mapDispatchToProps = dispatch => ({
  login: (user, status) => dispatch(login(user, status)),
  logout: (status) => dispatch(logout(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(FacebookButton);
