import React, { Fragment, } from 'react';
import './App.css';
import Login from './components/Login';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
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
import StyledCard from './components/SharedComponents/StyledCard';
import Cart from './components/Cart';
import NoMatch from './components/NoMatch';


class App extends React.Component {
  state = { windowHeight: window.innerHeight }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight
    })
  }


  render() {
    const { windowHeight } = this.state
    return (
      <Fragment>
        <FetchAdmin>
          <div style={{minHeight: windowHeight, display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
            <div>
              <Navbar />
              <Container fluid>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <ProtectedRoute exact path="/adminpanel" component={AdminPanel} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path='/purchase-record' component={PurchaseRecord} />
                  <Route exact path="/allmerchandise" component={Products} />
                  <Route exact path="/categories/:category_id/products" component={DynamicCategory} />
                  <Route exact path='/categories/:category_id/products/:id' component={DynamicProduct} />
                  <Route exact path='/styled' component={StyledCard} />
                  <Route exact path='/links' component={Links} />
                  <Route exact path='/cart' component={Cart} />
                  <Route component={NoMatch} />
                </Switch>
              </Container>
            </div>
            <Footer />
          </div>
        </FetchAdmin>
      </Fragment>
    )
  }
};

export default App;
