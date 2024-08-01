import { list } from 'postcss'
import React from 'react'
import { useProducts } from '../contexts/ProductsContext'

const ProductList = (props) => {
  const {deleteProduct} = useProducts()
  const filteredProducts = props.listProducts

  return (
    <div id='productlist'
    className={`${filteredProducts.length === 0 ? 'py0' : 'py5'}`}
    >
      <ul>
      {filteredProducts.map((product,index) => (
          <li
          key={index}
          >
            <button 
            onClick={() => deleteProduct(product.id)}
            >
              x
            </button>
            <p>{product.name}</p>
            <p>{(product.price).toFixed(2)}$</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList

