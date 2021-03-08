import EditProduct from "../../../components/EditProduct";

const UpdatePage = ({ query }) => {
  return <EditProduct id={query.id} />;
};

export default UpdatePage;
