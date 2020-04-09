import React, { Fragment, } from 'react';
import './App.css';
import Login from './components/Login';
import { Switch, Route, } from 'react-router-dom';
import { Container, Menu, } from "semantic-ui-react";
import FetchAdmin from './components/FetchAdmin';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/HomePage';
import PurchaseRecord from './components/PurchaseRecord'
import Products from './components/Products';
import Footer from './components/Footer';
import Navbar from './components/Menu';
import DynamicCategory from './components/DynamicCategory';
import DynamicProduct from './components/DynamicProduct';
import Links from './components/Links';
import Cart from './components/Cart'

// import Header from './components/Header'
 
const App = () => (
  <Fragment>
    <FetchAdmin>
    <Navbar/> 
     <Container fluid>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/adminpanel" component={AdminPanel} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/purchase-record' component={PurchaseRecord} />
          <Route exact path="/allmerchandise" component={Products} />
          <Route exact path="/categories/:category_id/products" component={DynamicCategory} />
          <Route exact path='/categories/:category_id/products/:id' component={DynamicProduct} />
          <Route exact path='/links' component={Links} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
        </Container>
      <Footer />
    </FetchAdmin>
   </Fragment>
);


export default App;
