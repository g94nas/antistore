import Hero from "../components/Hero";
import styled from "styled-components";
import FeaturedProducts from "../components/FeaturedProducts";

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
`;

const HomePage = () => {
  return (
    <>
      <Hero />
      <Divider>
        <div></div>
      </Divider>
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
