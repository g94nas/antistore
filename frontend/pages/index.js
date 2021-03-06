import Hero from "../components/Hero";
import styled from "styled-components";
import FeaturedProducts from "../components/FeaturedProducts";
import AllProducts from "../components/AllProducts";

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;

  div {
    width: 5px;
    height: 200px;
    background: var(--primaryColor);
  }

  .longer-divider {
    width: 5px;
    height: 200px;
    background: var(--primaryColor);
    margin-top: 4rem;
  }
`;

const HomePage = () => {
  return (
    <>
      <Hero />
      <Divider>
        <div></div>
      </Divider>
      <FeaturedProducts />
      <Divider>
        <div className="longer-divider"></div>
      </Divider>
      <AllProducts />
    </>
  );
};

export default HomePage;
