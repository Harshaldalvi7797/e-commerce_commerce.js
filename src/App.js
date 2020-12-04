/** @format */

import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // const { data } = await commerce.cart.retrieve();
    setCart(await commerce.cart.retrieve());
  };

  const handleToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);
  return (
    <div>
      E-Commerce
      <Navbar />
      <br />
      <br />
      <br />
      <Products products={products} onAddToCart={handleToCart} />
    </div>
  );
}
