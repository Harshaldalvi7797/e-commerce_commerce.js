/** @format */

import React from "react";

import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Cart = () => {
  const isEmpty = true;

  const EmptyCart = () => {};
  const classess = useStyles();
  return (
    <Container>
      <div className={classess.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilCart />}
    </Container>
  );
};
export default Cart;
