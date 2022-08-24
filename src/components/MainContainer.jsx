import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CryptoContainer from "./CryptoContainer";
const MainContainer = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <CryptoContainer />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
