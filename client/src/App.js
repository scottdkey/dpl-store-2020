import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchAdmin from './components/FetchAdmin';

const App = () => (
  <Fragment>
    <NavBar />
    <FetchAdmin >
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Container>
    </FetchAdmin>
  </Fragment>
)

export default App;
