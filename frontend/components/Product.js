import { useState } from "react";
import formatMoney from "../lib/formatMoney";
import { useRouter } from "next/router";
import { ProductStyle } from "./styles/ProductStyle";
import DeleteProduct from "./DeleteProduct";
import EditProductButton from "./EditProductButton";
import AddToCart from "./AddToCart";

const Product = ({ product }) => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  return (
    <ProductStyle>
      <div
        className="div-bg"
        onClick={() => router.push(`/product/${product?.id}`)}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <div className="div-main">
          {showButton ? (
            <DeleteProduct id={product?.id}>Delete</DeleteProduct>
          ) : (
            ""
          )}
          {showButton ? (
            <EditProductButton id={product?.id}>Edit</EditProductButton>
          ) : (
            ""
          )}
          <div>
            <img
              src={product?.photo?.image?.publicUrlTransformed}
              alt={product?.name}
            />
          </div>
          <h3>
            <span>{product?.name}</span>
          </h3>
          <span>{product?.description}</span>
          <h3>
            <span>{formatMoney(product?.price)}</span>
          </h3>
          {showButton ? <AddToCart id={product?.id} /> : ""}
        </div>
      </div>
    </ProductStyle>
  );
};

export default Product;
