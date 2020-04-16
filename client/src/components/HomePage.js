import React, { useState } from 'react';
import { Grid, Header, Image, Card, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BlueHeader from '../images/BlueHeader2.svg';
import Featured from '../images/blank.png'
import FunctionalSearch from './SharedComponents/FunctionalSearch';
import FeaturedProducts from './FeaturedProducts'


const HomepageLayout = () => {
  const [results, setResults] = useState([]);

  const afterSearch = (results) => setResults(results);

  const renderResults = () => results.map((result) => (
    <div key={result.id}>
      <Image src={result.main_image} alt={result.title} size="small" />
      <Card.Header>{result.title}</Card.Header>
      <Card.Meta>${result.price}</Card.Meta>
    </div>
  ));

  return (
    <>
      <div className="image-container">
        <Image src={BlueHeader} />
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <div className="centered"><h1 className="large-header">DevPoint Store</h1>
          <h3 className="small-header">Find something you'll love.</h3>
          <FunctionalSearch afterSearch={afterSearch}/>
        </div> 
      </div>
    
    <div style={style.container}>
      { results.length > 0 && renderResults() }
      {console.log(results)}
      <Grid >
        <Header as='h3' className='heading'>CATEGORIES</Header>
        <Grid.Row columns={4}>
          <Grid.Column centered>
            <Link to="/categories/1/products" ><RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">T Shirts</h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/categories/2/products" ><RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">Jackets & Hoodies </h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/categories/3/products" > <RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">Hats</h4>
          </Grid.Column>
          <Grid.Column>
            <Link to="/categories/4/products" ><RoundedImage as={Image} size="medium" src={Featured} /></Link>
            <h4 align="center">Stickers</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
      <br/> 
      <br/>
    </div>
    <div align="center"><FeaturedProducts /></div>
  </>
  )
};

const RoundedImage = styled.div`
  border-radius: 25px;
  width: 250px;
  height: 250px;
`;

const style = {
  button: {
    backgroundColor: "#F5F5F5",
    color: "#4901DB",
    borderRadius: "30px",
    padding: "20px",
    align: "center",
    border: "none",
    width: "125px",
  },
  container: {
    margin: "2% 11%",
    marginTop: "5%"
  },
}
export default HomepageLayout;
