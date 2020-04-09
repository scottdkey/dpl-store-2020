export const putItemInCart = (product, size, quantity) => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  if(cart === null){
    localStorage.setItem('cart',
    JSON.stringify([{id:1, object:{...product}, size:size, quantity}])
    )
  }
  else{
    localStorage.setItem('cart',
      JSON.stringify(
        [...JSON.parse(localStorage.cart),
          {id:(cart.length + 1), object:{...product}, size:size, quantity:quantity}
        ]
      )
    )
  }
}

export const deleteItemFromCart = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  if(cart !== null){
    const newCart = cart.filter(product => {return product.id !==id})
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
}

export const getAllCartItems = () => {
  if(localStorage.cart=== undefined){
    return([])
  }
  return (JSON.parse(localStorage.getItem('cart')))
}

export const clearCart = () => {
  localStorage.clear()
}
