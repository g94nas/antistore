import styled from "styled-components";

const FeaturedProductStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0 4rem;
  margin-top: 3rem;

  .div-bg {
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: var(--primaryColor);
    width: 325px;
    height: 425px;
    box-shadow: var(--bs);
  }

  .div-main {
    padding-top: 2rem;
    height: 375px;
    border-radius: 3px;
    width: 275px;
    margin-bottom: 1rem;
    background-color: white;

    div {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 200px;

      img {
        display: flex;
      }
    }

    h3 {
      color: var(--secondaryColor);
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      span {
        background: var(--primaryColor);
        font-weight: bold;
        padding: 0 2rem;
        border-radius: 3px;
        font-size: 2rem;
      }
    }

    span {
      margin-top: 1rem;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;

const FeaturedProduct = ({ product }) => {
  return (
    <FeaturedProductStyle>
      <div className="div-bg">
        <div className="div-main">
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
            <span>{product?.price}</span>
          </h3>
        </div>
      </div>
    </FeaturedProductStyle>
  );
};

export default FeaturedProduct;
