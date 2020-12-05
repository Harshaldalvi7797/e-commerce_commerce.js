/** @format */

import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";

import useStyles from "./styles";
const CartItem = ({ item, onUpdateCartQty, removeFromCart }) => {
  const classes = useStyles();
  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="primary"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
export default CartItem;
