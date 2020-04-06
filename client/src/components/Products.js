import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Header, Card, Tab, Image } from 'semantic-ui-react';
import Tshirts from './Tshirts';
import Hoodies from './Hoodies';
import Hats from './Hats';
import Stickers from './Stickers';

export default function Products() {
  const [ categories, setCategories ] = useState({tshirts:[],hoodies:[],hats:[],stickers:[]})

  useEffect(() => {
    axios
      .get("/api/products")
      .then(res => {
        putProductsInCategories(res.data);
      })
      .catch (e => console.log(e))}, []);

  const putProductsInCategories = (products) => {
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
    });
    setCategories({ tshirts, hoodies, hats, stickers})
  };

  return(
      <>
        <Header as="h1" textAlign="center">
          All Merchandise
        </Header>
        <Tshirts />
        <Hoodies />
        <Hats />
        <Stickers /> */}
      </>
        )
}