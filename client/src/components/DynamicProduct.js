import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Grid, Button, Image, Form, Dropdown, Container, Segment } from 'semantic-ui-react';
import { putItemInCart } from '../modules/CartFunctions';
import { Link } from 'react-router-dom';
import Featured from '../images/blank.png' 

const DynamicProduct = ({category_id, product_id, match}) => {
  const [product, setProduct] = useState({})
  const [size, setSize] = useState('')

  // const options = [
  //   { key: 1, text: 'Extra Small', value: 1 },
  //   { key: 2, text: 'Small', value: 2 },
  //   { key: 3, text: 'Medium', value: 3 },
  //   { key: 4, text: 'Large', value: 4 },
  //   { key: 5, text: 'Extra Large', value: 5 },
  // ]

  const [items] = useState([
    {
      label: "X-Small",
      value: "X-Small"
    },
    {
      label: "Small",
      value: "Small"
    },
    {
      label: "Medium",
      value: "Medium"
    },
    {
      label: "Large",
      value: "Large"
    },
    {
      label: "X-Large",
      value: "X-Large"
    }
  ])

  useEffect( () => {
    const cat_id = match.params.category_id
    const prod_id = match.params.id
    axios
      .get(`/api/categories/${cat_id}/products/${prod_id}`)
      .then( (res) => {
        setProduct(res.data);
        // console.log(res);
      })
      .catch(console.log);
  }, []);

    // const handleChange = (e) => {
    //   return(
    //     setSize(e)
    //   )
    // };

    

    return(
      <>
      <div style={style.headerContainer}>
          <Link to='/'><Button style={style.headerButton}>Hats</Button></Link>
        </div>
      <Container>
      <Card key={product.id} style= {style.card} >
      <Card.Header>
        <Grid >
          <Grid.Column width={8}>   
            <Image src={product.main_image} style= {style.roundedImage} />
            {/* main_image
            image.group itemsPerRow={4} all alt_images */}
          </Grid.Column>
          <Grid.Column width={7}>
            <Grid.Row style={{marginTop: '20%'}}><h1>{product.title}</h1></Grid.Row>
            <br/>
            <Grid.Row><h4>{product.description}</h4></Grid.Row>
            <br/> 
            <Grid.Row><h1>{"$" + product.price}</h1></Grid.Row>
            <br/> 
            {/* Header
            meta
            description
            price
            sizeDropdown component
            button onClick to add to cart */}
            {/* <Form id="selectedSize">
            <Form.Dropdown clearable search options={options} selection onChange={e => setSize(e.currentTarget.text)} />
            </Form> */}
            {/* <select onChange={e => setSize(e.currentTarget.value)}>
              {items.map(({ label, value }) => (
                <option key={value} value={value}>
                {label}
                </option>
              ))}
            </select> */}
            <Grid.Row>
            <Form style={{paddingRight: "40px"}} >
            <Form.Select 
                  label="Size"
                  name="sizeSelection"
                  value={sizeSelection}
                  // onChange={this.handleChange}
                  options={sizeSelection}
                />
                </Form>
                </Grid.Row>
                <br/> 
            <Grid.Row fluid>
            <Button fluid as={Link} to={{pathname:"/cart", state:{...product,...size}}} style={style.button} content="Add to Cart" onClick={() => putItemInCart(product, size, 1)} />
            </Grid.Row>
            {console.log(product)}
            {console.log(size)}
           
          </Grid.Column>
        </Grid>
      </Card.Header>
      </Card>
      </Container>
      </>
    )
};

const sizeSelection = [
  { key: "xs", text: "X-Small", value: "X-Small", },
  { key: "s", text: "Small", value: "Small", },
  { key: "m", text: "Medium", value: "Medium", },
  { key: "l", text: "Large", value: "Large", },
  { key: "xl", text: "X-Large", value: "X-Large", },
];


export default DynamicProduct;

const buttonStyle= {
 
};

const style = {
  button: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    padding: '20px',
  },
  headerContainer: {
    backgroundColor: '#4901DB',
    color: 'white',
    padding: '20px 100px',
    height: '200px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerButton: {
    backgroundColor: 'rgba(0,0,0, 0.13)',
    fontSize: '12px',
    color: 'rgba(255,255,255, 0.7)',
    width: '100px',
  },
  roundedImage: {
    borderRadius: '25px',
    width: '400px',
    height: '450px',
    padding: '40px',
  },
  card: {
    height: '600px', 
    width: '1100px', 
    borderRadius: '12px',
    marginBottom: '20%',
  },
  rounded: {
    borderRadius: '25px',
  }
};