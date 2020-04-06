import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Header, Card, Tab, Image } from 'semantic-ui-react';
import Tshirts from './Tshirts';

export default function Products() {
  const { products, setProducts, } = useState([])
  const { categories, setCategories } = useState([])

  useEffect(() => {
    axios
      .get("/api/products")
      .then(res => {
        setProducts(res.data)
        this.putProductsInCategories();
      })
      .catch (e => console.log(e));
    });

const putProductsInCategories = () => {
  const tshirts = [];
  const hoodies = [];
  const hats = [];
  const stickers = [];
  
  products.map( (product) => {
    if (product.category === "T-Shirts") {
      tshirts.push(product);
    } else if (product.category === "Hoodies") {
      hoodies.push(product);
    } else if (product.category === "Hats") {
      hats.push(product);
    } else {
      stickers.push(product);
    }
    }),
    setCategories({ tshirts, hoodies, hats, stickers}), []};

  return(
      <>
        <Header as="h1" textAlign="center">
          All Merchandise
        </Header>
        <Tshirts categories={categories} />
        {/* <Hoodies hoodies={hoodies} />
        <Hats tShirts={hats} />
        <Stickers tShirts={stickers} /> */}
      </>
        )
}