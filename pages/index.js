import axios from 'axios';
import {Layout} from '../components/Layout';
import ProductCard from '../components/ProductCard';

function HomePage({products}) {
  return (
    <Layout>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {data: products} = await axios.get('http://localhost:3000/api/products');
  return {
    props: {products},
  };
}

export default HomePage;
