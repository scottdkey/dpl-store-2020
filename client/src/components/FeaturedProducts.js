import React from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import FeaturedCard from './FeaturedCard'

class FeaturedProducts extends React.Component {
  state = { featuredProducts: [], showAllFeatured: false, someFeatured: [], pictureHeight: ((window.innerWidth) / 4) }

  componentDidMount() {
    axios.get('/api/featured_products')
      .then(res => {
        if(res.data.length > 3){
          this.setState({
            featuredProducts:res.data,
            someFeatured: [res.data[0],res.data[1],res.data[2],res.data[3]]
          })
        }
        else{
          this.setState({
            featuredProducts:res.data,
            someFeatured: res.data
          })
        }
      }).catch(e => console.log(e))

    window.addEventListener('resize', this.handleResize)

  }

  handleResize = () => {
    this.setState({
      pictureHeight: ((window.innerWidth) / 4)
    })
  }

  toggleProducts = () => {
    const { showAllFeatured } = this.state
    this.setState({ showAllFeatured: !showAllFeatured })
  }

  render() {
    const { showAllFeatured, featuredProducts, someFeatured, pictureHeight } = this.state
    return (
      <div style={style.container}>
        <div style={style.header}>
          <h3>Featured Products</h3>
        </div>
        {showAllFeatured ?
          <div style={style.productHolder}>
            {featuredProducts.map(product =>
              <div style={style.product}><FeaturedCard pictureHeight={pictureHeight} product={product} /></div>)}
          </div>
          :
          <div style={style.productHolder}>
            {someFeatured.map(product =>
              <div style={style.product}><FeaturedCard pictureHeight={pictureHeight} product={product} /></div>)}
          </div>
        }
        <div>
          <Button onClick={this.toggleProducts} style={style.button}>{showAllFeatured ? 'Show Less' : 'Show More'}</Button>
        </div>
      </div>
    )
  }
}

const style = {
  header: {
    textAlign: 'left'
  },
  container: {
    margin: '2% 10%',
    marginTop: '5%'
  },
  button: {
    borderRadius: '30px',
    color: '#4901DB',
    backgroundColor: 'rgba(74,1,219, .03)'
  },
  productHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '2%'
  },
  product: {
    width: '49%',
    margin: '1% 0',
  }
}

export default FeaturedProducts