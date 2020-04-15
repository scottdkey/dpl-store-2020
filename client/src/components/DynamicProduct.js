import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Grid, Button, Image, Form, Dropdown, } from 'semantic-ui-react';
import { putItemInCart } from '../modules/CartFunctions';
import { Link } from 'react-router-dom';


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
      <Card key={product.id}>
      <Card.Header>
        <Grid>
          <Grid.Column width={8}>   
            <Image src={product.main_image} />
            {/* main_image
            image.group itemsPerRow={4} all alt_images */}
            This is where the Image Goes
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid.Row>{product.title}</Grid.Row>
              <Grid.Row>{"$" + product.price}</Grid.Row>
              <Grid.Row>{product.description}</Grid.Row>
            {/* Header
            meta
            description
            price
            sizeDropdown component
            button onClick to add to cart */}
            {/* <Form id="selectedSize">
            <Form.Dropdown clearable search options={options} selection onChange={e => setSize(e.currentTarget.text)} />
            </Form> */}
            <select onChange={e => setSize(e.currentTarget.value)}>
              {items.map(({ label, value }) => (
                <option key={value} value={value}>
                {label}
                </option>
              ))}
            </select>
            <Button as={Link} to={{pathname:"/cart", state:{...product,...size}}} style={style.button} content="Add to Cart" className="pillButton" onClick={() => putItemInCart(product, size, 1)} />
            {console.log(product)}
            {console.log(size)}
          </Grid.Column>
        </Grid>
      </Card.Header>
      </Card>
      </>
    )
};

export default DynamicProduct;

const style= {
  button: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
  }
}
