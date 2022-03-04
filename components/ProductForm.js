import axios from 'axios';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {toast} from 'react-toastify';

export function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query.id) {
        await axios.put(`/api/products/${router.query.id}`, product);
        toast.success('Product updated succesfully');
      } else {
        await axios.post('/api/products', product);
        toast.success('Product created succesfully');
      }
      router.push('/');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  function handleChange({target: {name, value}}) {
    setProduct({...product, [name]: value}); // pensar en que vol dir esta desestructuració
  }

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get(`/api/products/${router.query.id}`);
      setProduct({name: data.name, description: data.description, price: data.price});
    };
    if (router.query.id) {
      getProduct(router.query.id);
    }
  }, []);

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
          value={product.name}
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <label htmlFor="desctiption">Description:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">
          {router.query.id ? 'Update' : 'Save'}
        </button>
      </form>
    </div>
  );
}
