import React from "react";
import { Header } from "semantic-ui-react";
import Products from "./Products";
import AdminPanelForm from "./AdminPanelForm";


const Home = () => {
  return (
    <>
      <Header as="h1" textAlign="center">
        DevPoint Labs Store
        <Products />
      </Header>
    </>
  );
};

export default Home;
