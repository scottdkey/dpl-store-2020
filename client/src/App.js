import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchAdmin from './components/FetchAdmin';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/home'


const App = () => (
  <Fragment>
    <NavBar />
    <FetchAdmin>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/adminpanel" component={AdminPanel} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Container>
    </FetchAdmin>
  </Fragment>
);

export default App;
