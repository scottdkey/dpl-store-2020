import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchAdmin from './components/FetchAdmin';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute'


const App = () => (
  <Fragment>
    <NavBar />
    <FetchAdmin >
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path='/adminpanel' component={AdminPanel}/>
      </Switch>
    </Container>
    </FetchAdmin>
  </Fragment>
)

export default App;
