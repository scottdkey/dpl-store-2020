import React, { useState, useEffect } from 'react';
import { Card, SearchCategory, } from 'semantic-ui-react';
import Products from './Products';

const Tshirts = ({ categories }) => {
  const [tshirts, setTshirts] = useState([])

  const categorizeTshirts = (categories) => {
    categories.map(product => {
      if (categories.key == "tshirt") {
        tshirts.push(product);
      }
    }), []
  };

  const renderTshirts = () => (
    tshirts.map(tshirt => {
      <>
        <Card>
          <Card.Header>{tshirt.main_image}</Card.Header>
        </Card></>
    })
  );

  return (
    <>
      <h1>T-Shirts</h1>
      {renderTshirts()}
    </>
  )
}

export default Tshirts;


// renderCategories = () =>
{/* //   this.categories.map(c => { */ }
{/* //     const category = c.name;
//     const products = c.products;
//     return (
//       <>
//         <Header>{category}</Header>
//         <Card.Group itemsPerRow={4}>
//           {products.map(product => {
//             const price = "$" + product.price
//             return (
//               <Card>
//                 <Card
//                   image={product.main_image}
//                   header={product.title}
//                   meta={price}
//                 />
//               </Card>
//             );
//           })}
//         </Card.Group>
//       </>
//     );
//   }); */}