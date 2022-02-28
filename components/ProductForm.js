import axios from 'axios';
import {useState} from 'react';

export function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/products', product);
    console.log(res);
  };

  function handleChange({target: {name, value}}) {
    setProduct({...product, [name]: value}); // pensar en que vol dir esta desestructuració
  }

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <label htmlFor="desctiption">Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">
          Save Product
        </button>
      </form>
    </div>
  );
}