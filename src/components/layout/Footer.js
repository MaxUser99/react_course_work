/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

const Footer = () => {
  const classes = useStyles();
  const id = "footer-title";
  let thisComponent = null;

  const [isVisible, setVisibility] = useState(false);

  const trackScrolling = () => {
    if(!thisComponent ||(thisComponent.getBoundingClientRect().top <= window.innerHeight && !isVisible)) {
      setVisibility(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    if (!thisComponent)
      thisComponent = document.getElementById(id);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    }
  }, []);

  return (
      <Fade
        timeout={1000}
        in={isVisible}
      >
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" id={id} gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Course Work create bt Maxim Ossas
          </Typography>
        </footer>
      </Fade>
  )
};

export default Footer;
