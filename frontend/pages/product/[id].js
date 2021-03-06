import SingleProductPage from "../../components/SingleProductPage";

const ProductPage = ({ query }) => {
  return <SingleProductPage id={query.id} />;
};

export default ProductPage;
