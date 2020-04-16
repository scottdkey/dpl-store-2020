import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Grid, Image, Header, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import Featured from '../images/blank.png'

const CategoriesLinks = () => {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    axios
    .get(`/api/categories`)
    .then( (res) => {
      setCategories(res.data)
    })
    .catch(console.log);
  }, []);
  
  const renderLinks = () =>
    categories.map( (category) => (
      <div key={`${category.id}`}>
        <Grid.Column centered>
          <Link to={`/categories/${category.id}/products`}><Image style={styles.image} src={Featured} /></Link>
          <h4 align="center">{category.name}</h4>
        </Grid.Column>
      </div>
    ))

  return(
    <Grid>
      <Header as="h3" class="heading">CATEGORIES</Header>
      <Grid.Row columns={4}>
        {renderLinks()}
      </Grid.Row>
    </Grid>
  )
};

const styles = {
  image: {
  borderRadius: "25px",
  width: "275px",
  height: "225px",
  margin: '5px',
  }
}

export default CategoriesLinks;