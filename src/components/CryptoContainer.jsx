import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const CryptoContainer = () => {
  const [data, setData] = useState([]);
  const currency = useSelector((state) => state.search.currency);
  const search = useSelector((state) => {
    return state.search.value;
  });
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=${currency}`
      );
      const respData = await resp.json();

      setData(respData.coins);
    };

    fetchData();
  }, [currency]);
  const filterCoins = data.filter((val) => {
    return val.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Container>
      <div className="header-indexes">
        <div className="name">Name</div>
        <div className="marketcap">Market Cap</div>
        <div className="price">Price</div>
        <div className="volume">Volume 24H</div>
        <div className="circulating-supply">Circulating Supply</div>
        <div className="change">Change(1w)</div>
      </div>
      <hr />
      <div className="cards">
        {filterCoins.map((val) => (
          <Card data={val} key={Math.random()} />
        ))}
      </div>
    </Container>
  );
};

export default CryptoContainer;

const Container = styled.div`
  width: 70%;
  height: 50px;

  .header-indexes {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    .name {
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    .marketcap,
    .price,
    .volume,
    .circulating-supply,
    .change {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-weight: 600;
    }
  }
  hr {
    border: 1px solid #bfbfbf;

    width: 100%;
  }
  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    .header-indexes {
      grid-template-columns: repeat(3, 1fr);
      .volume,
      .circulating-supply,
      .change {
        display: none;
      }
      .name,
      .marketcap,
      .price {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        height: 100%;
      }
      .name {
        justify-content: flex-start;
      }
    }
    .cards {
      max-height: 700px;
      overflow: scroll;
    }
  }
`;
