import React from 'react';
import './App.css';
import productsData from "./Components/vschoolProduct"
import Product from "./Components/Product"

function App() {
 
  const productComponents = productsData.map(item => <Product product={item}/>)


return (
  <div>
    { productComponents }
  </div>
)
}
export default App;
