// import { useState, useEffect } from 'react'
// import axios from 'axios'

// export const useGetProducts = (category_id) => {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     const getProducts = async () => {
//       const { data } = await axios.get(`/api/categories/${category_id}/products`)
//       setProducts(data);
//     }

//     getProducts()
//   }, [category_id])

//   return products;
// }


