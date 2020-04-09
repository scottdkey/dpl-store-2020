import React, { Fragment, } from 'react';
import './App.css';
import Login from './components/Login';
import { Switch, Route, } from 'react-router-dom';
import { Container, Menu, Header, } from "semantic-ui-react";
import FetchAdmin from './components/FetchAdmin';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/HomePage';
import Tshirts from './components/Tshirts';
import Hoodies from './components/Hoodies';
import Hats from './components/Hats';
import Stickers from './components/Stickers';
import Products from './components/Products';
import Footer from './components/Footer';
import Navbar from './components/Menu';
import CartLayout from './components/Cart';
import MainHeader from './components/Header';

// import Header from './components/Header'
 
const App = () => (
  <Fragment>
    <FetchAdmin>
    <Navbar /> 
     <Container fluid>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/adminpanel" component={AdminPanel} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tshirts" component={Tshirts} />
          <Route exact path="/hoodies" component={Hoodies} />
          <Route exact path="/hats" component={Hats} />
          <Route exact path="/stickers" component={Stickers} />
          <Route exact path="/cart" component={CartLayout} />
          <Route exact path="/allmerchandise" component={Products} />
        </Switch>
        </Container>
      <Footer />
    </FetchAdmin>
   </Fragment>
);

export default App;
