import React from "react";
import { Header } from "semantic-ui-react";
import AdminPanelForm from "./AdminPanelForm";


const Home = () => {
  return (
    <>
      <Header as="h1" textAlign="center">
        <AdminPanelForm />
      </Header>
    </>
  );
};

export default Home;
