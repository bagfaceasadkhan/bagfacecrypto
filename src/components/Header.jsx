import React from "react";
import styled from "styled-components";
import EqualizerIcon from "@mui/icons-material/Equalizer";
const Header = () => {
  return (
    <Container>
      <div className="header-container">BAGFACECRYPTO</div>
      <hr />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  .header-container {
    display: flex;
    height: 50px;
    color: #3da0d2;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    font-weight: 600;
  }
  hr {
    border: 1px solid #bfbfbf;
    margin-top: 5px;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    .header-container {
      width: 100%;
      justify-content: center;
    }
    hr {
      border: 1px solid #bfbfbf;

      width: 100%;
    }
  }
`;
