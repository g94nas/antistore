import Hero from "../components/Hero";
import styled from "styled-components";
import FeaturedProducts from "../components/FeaturedProducts";
import AllProducts from "../components/AllProducts";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";

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
  const { query } = useRouter();
  const page = parseInt(query.page);

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
      <AllProducts page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
};

export default HomePage;
