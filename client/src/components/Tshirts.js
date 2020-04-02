import React from 'react'
import Footer from './Footer';

class TShirts extends React.Component {
  state = { tshirts: [],};

  render() {
    const { tshirts, } = this.state;
    return (
      <div id="wrap">
      <Card.Group itemsPerRow={4}>
        { tshirts.map( tshirt =>
          <Card key={tshirt.id}>
            <Image src={tshirt.mainImage} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { tshirt.title }
              </Card.Header>
              <Card.Meta>
                {tshirt.price}
              </Card.Meta>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </div>
    )
  }
}

