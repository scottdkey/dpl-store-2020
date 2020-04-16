import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <div style={style.container}>
  <Header as="h3" textAlign="center">Page not found return </Header>
    <br/>
    <div align="center">
    <Link to='/'><button className="ui button" style={style.button}>Home</button></Link>
      </div>
 
  </div>
);

const style = {
  button: {
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)",
  },
  container: {
    margin: "14% 11%",
    marginTop: "5%"
  },
}
export default NoMatch;