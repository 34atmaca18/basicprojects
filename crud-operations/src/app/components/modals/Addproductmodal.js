import React,{useState} from 'react'
import { useProducts } from '@/app/contexts/ProductsContext';

const Addproductmodal = ({isOpen,onClose}) => {

  const {addProduct} = useProducts()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('')
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'addproduct') {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && price) {
      try {
        await addProduct(name,parseFloat(price))
        setName('')
        setPrice('')
        onClose();
      }
      catch (error) {
        setError('Failed while adding product..try again',error)
      }
    }
    else {
      setError('fill all needed areas')
    }
  }

  return (
    <div id='addproduct'
    onClick={handleBackgroundClick}>
      <div id='content'>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name</label>
            <input
            placeholder='name..'
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
            <label htmlFor="price">Price</label>
            <input
            placeholder='price..'
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
            <div>
              <button 
              type="submit">
                Add Product!
              </button>
              {error && <p className="error">{error}</p>}
            </div>
        </form>
        <button
        className='closemodal'
        onClick={onClose}
        >x</button>
      </div>
    </div>
  )
}

export default Addproductmodal