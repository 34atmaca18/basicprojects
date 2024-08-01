import React,{useState,useEffect} from 'react'
import { Filterbar,ProductList,Addproductmodal } from '../components/index.js'
import { useProducts } from '../contexts/ProductsContext.js'
import '../styles/main.scss'

const Main = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const {state,fetchProducts} = useProducts()
  const { filteredProducts } = state;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const handleModalToggle = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div id='main'>
        <h1>Product Management!</h1>
        <Filterbar />
        <button
          className='button1'
          onClick={handleModalToggle}
          >
            Add Product!
        </button>
        <ProductList listProducts = {filteredProducts}/>
        {isModalOpen && <Addproductmodal 
        onClose={handleModalToggle}
        />}
    </div>
  )
}

export default Main