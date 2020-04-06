export const putItemInCart = (product, size, quantity) => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  //checking if the cart contains anything and puts the item in the cart 
  //depending on the carts previous status
  if(cart === null){
    //putting the first item in cart and giving id of 1
    localStorage.setItem('cart',
    JSON.stringify([{id:1, object:{...product}, size:size, quantity}])
    )
  }
  else{
    //reassigning the value of cart with the previous data plus the new item
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
  return JSON.parse(localStorage.getItem('cart'))
}



// Don't know if you want something to edit, if we don't. Need to discuss the 
// flow for that to build this out better.

// export const editItemInCart = (id) => {
//   let cart = JSON.parse(localStorage.getItem('cart'))
//   if(cart !== null){
//     const editItem = cart.filter(product=> {return product.id === id})
//     const newCart = cart.filter(product => {return product.id !==id})
//     localStorage.setItem('cart', JSON.stringify(newCart))
//     return editItem
//   }
// }