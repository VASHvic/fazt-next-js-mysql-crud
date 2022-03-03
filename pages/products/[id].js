import axios from 'axios';
import {useRouter} from 'next/router';
import {Layout} from '../../components/Layout';

function ProductView({product}) {
  const router = useRouter();

  async function handleDelete(id) {
    await axios.delete(`/api/products/${id}`);
    router.push('/');
  }
  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>

      <button
        onClick={() => handleDelete(product.id)}
        className="bg-red-500 p-2 text-white hover:bg-red-700 rounded"
      >
        Delete
      </button>
      <button
        onClick={() => router.push(`/products/edit/${product.id}`)}
        className="bg-yellow-500 p-2 text-white hover:bg-yellow-700 rounded ml-2"
      >
        Edit
      </button>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const {data: product} = await axios.get(
    'http://localhost:3000/api/products/' + context.query.id
  );

  return {
    props: {product},
  };
};
export default ProductView;
