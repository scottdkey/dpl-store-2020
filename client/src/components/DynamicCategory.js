import React, { useState, useEffect } from "react";
import { Card, Image, Button, Container, Grid,  } from "semantic-ui-react";
import axios from "axios";
import { Link, } from "react-router-dom";
import BlueHeader from '../images/BlueHeader2.svg'

const DynamicCategory = ({category_id, match, category_name }) => {
  const [items, setItems] = useState([]);
  const cat_id = category_id || match.params.category_id
  // make another useEffect to get the category
  // /categories/:category_id/

  // refactor component to get products by category
  // when the controller exists (see Brianna)
  // /categories/:category_id/products/:product_id
  // call to get both of them

  useEffect(() => {
    console.log(match)
    const cat_id = category_id || match.params.category_id
    axios
      .get(`/api/categories/${cat_id}/products`)
      .then((res) => {
        setItems(res.data);
      })
      .catch(console.log);
  }, []);

  const renderItems = () =>
    items.map((product) => (
        
<div key={product.id}>
<h1>{category_name}</h1>  
<div style={{...style.photoHolder, }} >
  <div style={style.crop}>
  <Image src={product.main_image} as={Link} to={{pathname:`/categories/${cat_id}/products/${product.id}`, state:{...product} }} />
  </div>
</div>

<div style={style.informationContainer}>
  <div>
    <h3 style={{ margin: '5px', display: "inline" }}>{"$" + product.price}</h3><h5 style={{ margin: '5px', display: "inline" }}>{product.title}</h5>
  </div>
  
</div>

</div>

    ));
    
  return (
    <>
    <div class="image-container">
    <Image src={BlueHeader} style={{width:"100%"}} />
    {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
    <div class="centered"><h1>Category Name goes here</h1>
    <h3>Find something you'll love.</h3></div> 
    </div>
    <Container>
    <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
    {renderItems()}
    </Grid.Column>
            </Grid.Row>
          </Grid>
    </Container>
    <br/>
    <div align="center">
          <button style={style.button}>
            See More
          </button>
        </div>
        <br/> 
    
    </>
  );
};

export default DynamicCategory;

const style = {
  crop: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  photoHolder: {
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '.5em',
    marginBottom: '.3em',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: '0px 3px 10px #cccccc',
  },
  informationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  item: {
    width: '30%',
    margin:'1%'
  },
    button: {
      backgroundColor: '#F5F5F5',
      color: '#4901DB',
      borderRadius: '30px',
      padding: '20px',
      align: 'center',
      border: 'none',
      width: '125px',
    },
  };
