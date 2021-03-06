import styled from "styled-components";

const HeroStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  align-items: center;

  .div-h1 {
    width: 50%;
    text-transform: uppercase;

    span {
      display: flex;
      font-size: 8rem;
      text-align: center;
      line-height: 1.2;
      font-weight: 700;
    }
  }

  .separator {
    width: 20%;
    height: 5px;
    margin-top: 3rem;
    margin-bottom: 5rem;
    background: var(--primaryColor);
  }

  .div-h3 {
    width: 45%;

    h2 {
      border-radius: 3px;
      font-size: 2rem;
      text-align: center;
      background: var(--primaryColor);
      color: var(--secondaryColor);
    }
  }
`;

const Hero = () => {
  const textBg = "Don't buy anything in here. This is an Antistore.";

  return (
    <>
      <HeroStyle>
        <div className="div-h1">
          <span>Welcome to the Antistore</span>
        </div>
        <div className="separator"></div>
        <div className="div-h3">
          <h2>{textBg}</h2>
        </div>
        <div className="divider"></div>
      </HeroStyle>
    </>
  );
};

export default Hero;
