import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Grid, } from 'semantic-ui-react';


const DynamicProduct = ({category_id, product_id, match}) => {
  const [product, setProduct] = useState({})

  useEffect( () => {
    const cat_id = match.params.category_id
    const prod_id = match.params.product_id
    axios
      .get(`/api/categories/${cat_id}/products/${prod_id}`)
      .then( (res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch(console.log);
  }, []);



    return(
      <>
      <h1>{product.title}</h1>
      <Card>
      <Card.Header>
        <Grid>
          <Grid.Column width={8}>
            {/* main_image
            image.group itemsPerRow={4} all alt_images */}
            This is where the Image Goes
          </Grid.Column>
          <Grid.Column width={8}>
            {/* Header
            meta
            description
            price
            sizeDropdown component
            button onClick to add to cart */}
            This is where the details go
          </Grid.Column>
        </Grid>
      </Card.Header>
      </Card>
      </>
    )
};

export default DynamicProduct;