import React from "react";
import { Header } from "semantic-ui-react";
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
      <Header as="h2" textAlign="center">Categories</Header>
      <p>
      {/* link to t-shirts category */}
      <Link to="/api/products/tshirts">Tshirts</Link>
      {/* link to hoodies category */}
      <Link to="/api/products/hoodies">Hoodies</Link>
      {/* link to hats category */}
      <Link to="/api/products/hats">Hats</Link>
      {/* link to stickers category */}
      <Link to="/api/products/stickers">Stickers</Link>
      <Link to='/allmerchandise'>All Merchandise</Link>
      </p>
      <Header as="h2" textAlign="center">Featured</Header>
      // featured items
      {/* <Footer /> */}
      {/* Link_to viewProduct Page, same link as viewing a product   */}
    </>
  );
};

export default Home;
