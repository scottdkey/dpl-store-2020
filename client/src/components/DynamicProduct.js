import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Grid, Button, Image, Form, Container, } from 'semantic-ui-react';
import { putItemInCart } from '../modules/CartFunctions';
import { Link } from 'react-router-dom';
import Featured from '../images/blank.png' 
import Links from './Links';
import Arrow from '../images/LineArrowDown.svg';

const DynamicProduct = ({category_id, product_id, match}) => {
  const [product, setProduct] = useState({})
  const [size, setSize] = useState('')
  const [showImage, setShowImage] = useState('')
  const [images, setImages] = useState([])
  const [category, setCategory] = useState('')
  const [items] = useState([
    {
      label: "",
      value: ""
    },
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
    },
  ])

  // gets product on initial render
  useEffect( () => {
    const cat_id = match.params.category_id
    const prod_id = match.params.id
    axios
      .get(`/api/categories/${cat_id}/products/${prod_id}`)
      .then(res => {
        setProduct(res.data)
        setShowImage(res.data.main_image)
      })
      .catch(e => console.log(e))
  }, []);

  // gets images on initial render
  useEffect(() => {
    axios.get(`/api/products/${match.params.id}/images`)
    .then(res => setImages(res.data))
    .catch(e=> console.log(e))
  },[])

    
  
  const handleChange = (e) => {
    return(
      setSize(e)
    )
  };

  const imageGroup = () => {
    return (
      <>
        <Image src={showImage} style={style.roundedImage} />
        <Image.Group>
          <Image src={product.main_image} style={style.altImage} onClick={() => pickShowImage(product.main_image)} />
          {images.slice(0, 3).map(image => {
            if(image.url === null){
              //return nothing
            }else {
              return (
                <>
                  <Image style={style.altImage} src={image.url} onClick={() => pickShowImage(image.url)}/>
                </>
              )
            }
          })}
        </Image.Group>
      </>
    );
  }

  const pickShowImage = (imageURL) => {
    setShowImage(imageURL)
  }
    
  return(
    <>
      <div style={style.headerContainer}>
          <Link to={`/categories/${match.params.category_id}/products/`}><Button style={style.headerButton}>Go Back</Button></Link>
        </div>
      <Container>
      <Card key={product.id} style= {style.card}>
      <Card.Header>
        <Grid>
        <div align="center">
          <Grid.Column width={8}  kvb>   
            {imageGroup()}
          </Grid.Column>
        </div>
        <Grid.Column width={7}>
          <Grid.Row style={{marginTop: '20%'}}><h1>{product.title}</h1></Grid.Row>
          <br/>
          <Grid.Row><h4>{product.description}</h4></Grid.Row>
          <br/> 
          <Grid.Row><h1>{"$" + product.price}</h1></Grid.Row>
          <br/> 
 
          <div class="fitted-icon">
            <p>Size</p>
            <select style={style.dropdown} onChange={e => setSize(e.currentTarget.value)}>
            {items.map(({ label, value }) => (
              <option key={value} value={value}>
              {label}
              </option>
            ))}
            </select>
            <Image src={Arrow} style={style.arrow}  ></Image>
          </div>
          <div>
            <br/> 
            <Grid.Row >
            <Button as={Link} to={{pathname:"/cart", state:{...product,...size}}} style={style.button} content="Add to Cart" onClick={() => putItemInCart(product, size, 1)} />
            </Grid.Row>
          </div>
        </Grid.Column>
        </Grid>
      </Card.Header>
      </Card>
      </Container>
    </>
  )
};

const style = {
  button: {
    color: 'white',
    backgroundColor: '#4901DB',
    borderRadius: '30px',
    padding: '20px',
    width: '460px',
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
    borderRadius: '50px',
    width: '500px',
    height: '500px',
    padding: '40px',
  },
  card: {
    height: '600px', 
    width: '1100px', 
    borderRadius: '12px',
    marginBottom: '20%',
    marginTop: '-100px',
  },
  rounded: {
    borderRadius: '25px',
    padding: '40px',
  },
  altImage: {
    borderRadius: '20px',
    height: '100px',
    width: '100px',
    marginTop: '-25px',
  },
  dropdown: {
    width: '460px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    borderColor: 'lightgrey',
    textDecoration: 'none',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    textIndent: '1px',
    textOverflow: '',
  },
    arrow: {
      backgroundColor: '#FFFFFF',
      width: '20px',
      position: 'absolute',
      display: 'inline-block',
      left: '425px',
      top: '42px',
    },
};

export default DynamicProduct;