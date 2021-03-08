import styled from "styled-components";
import { useRouter } from "next/router";

const EditProductButton = ({ id, children }) => {
  const router = useRouter();

  const handleRouting = (e) => {
    e.stopPropagation();
    router.push(`/product/edit/${id}`);
  };

  return (
    <button className="button-edit" onClick={handleRouting}>
      {children}
    </button>
  );
};

export default EditProductButton;
