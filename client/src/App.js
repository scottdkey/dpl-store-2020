import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchAdmin from './components/FetchAdmin';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/home';
import Tshirts from './components/Tshirts';
import Hoodies from './components/Hoodies';
import Hats from './components/Hats';
import Stickers from './components/Stickers';
import PurchaseRecord from './components/PurchaseRecord'

const App = () => (
  <Fragment>
    <NavBar />
    <FetchAdmin>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/adminpanel" component={AdminPanel} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/api/products/tshirts" component={Tshirts} />
          <Route exact path="/api/products/hoodies" component={Hoodies} />
          <Route exact path="/api/products/hats" component={Hats} />
          <Route exact path="/api/products/stickers" component={Stickers} />
          <Route exact path='/purchase-record' component={PurchaseRecord} />
        </Switch>
      </Container>
    </FetchAdmin>
  </Fragment>
);

export default App;
