/** @format */

import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shooes",
    description: "hello",
    image:
      "https://image.shutterstock.com/image-photo/waves-water-river-sea-meet-600w-1529923664.jpg"
  },
  {
    id: 2,
    name: "Shirts",
    description: "Awesome",
    image:
      "https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-600w-766886038.jpg"
  },
  {
    id: 3,
    name: "Shirts",
    description: "Awesome",
    image:
      "https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-600w-766886038.jpg"
  },
  {
    id: 4,
    name: "Shirts",
    description: "Awesome",
    image:
      "https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-600w-766886038.jpg"
  }
];
const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
