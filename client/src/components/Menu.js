<Segment 
inverted 
textAlign='center'
style={{ minHeight: 700, padding: '1em 0em' }}
vertical
>
<Menu 
  fixed={fixed ? 'top' : null}
  inverted={!fixed}
  pointing={!fixed}
  secondary={!fixed}
  size='large'
>
  <Container >
    <Menu.Item as='a' active>
      .SHOP
    </Menu.Item>
    <Menu.Item position='right'>
    <Menu.Item as='a'>All Products</Menu.Item>
    <Menu.Item as='a'>T-Shirts</Menu.Item>
    <Menu.Item as='a'>Hoodies </Menu.Item>
    <Menu.Item as='a'>More<Icon name="dropdown"/></Menu.Item>
    <Menu.Item as='a'><Icon name="shopping cart" />Cart </Menu.Item>
    </Menu.Item>
  </Container>
</Menu>
<HomepageHeading />
</Segment>