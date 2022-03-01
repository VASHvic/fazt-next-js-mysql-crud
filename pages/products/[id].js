import {Layout} from '../../components/Layout';

function ProductView() {
  return (
    <Layout>
      <div>ProductView</div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  return {
    props: {},
  };
};
export default ProductView;
