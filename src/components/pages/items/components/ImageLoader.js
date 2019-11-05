import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Img from 'react-image';

const useStyles = makeStyles({
  img: {
    width: "100%"
  },
  div: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  span: {
    marginTop: '20%'
  }
});

const ImageLoader = ({ src, placeholder }) => {
  const classes = useStyles();

return (
  <Img
    className={classes.img}
    src={src}
    placeholder={placeholder}
    unloader={<div className={classes.div}><span className={classes.span}>image cant be loaded</span></div>}
  />
);
};

export default ImageLoader;
