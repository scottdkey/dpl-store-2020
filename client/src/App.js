import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
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

// import Header from './components/Header'
 
const App = () => (
  <Fragment>
 
    <FetchAdmin>
     <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/adminpanel" component={AdminPanel} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tshirts" component={Tshirts} />
          <Route exact path="/hoodies" component={Hoodies} />
          <Route exact path="/hats" component={Hats} />
          <Route exact path="/stickers" component={Stickers} />
          <Route exact path="/allmerchandise" component={Products} />
        </Switch>
        </Container>
      <Footer />
    </FetchAdmin>
   </Fragment>
);

export default App;
