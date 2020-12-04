/** @format */

import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <Router>
      E-Commerce
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
      <div></div>
    </Router>
  );
}
