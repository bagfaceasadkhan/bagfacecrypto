import React from "react";
import styled from "styled-components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
const Card = (props) => {
  const symbol = useSelector((state) => state.search.symbol);
  return (
    <Container>
      <div className="card">
        <div className="name">
          <img src={props.data.icon} alt="" />
          <div className="symbol">{props.data.symbol}</div>
          <div className="names">{props.data.name}</div>
        </div>
        <div className="marketcap" style={{ color: "#96a0a9" }}>
          {symbol} {Math.round(props.data.marketCap)}
        </div>
        <div className="price" style={{ fontWeight: "600" }}>
          {symbol} {Math.round(props.data.price)}
        </div>
        <div className="volume" style={{ fontWeight: "600" }}>
          {symbol} {Math.round(props.data.volume)}
        </div>
        <div className="circulating-supply">
          {symbol} {Math.round(props.data.totalSupply)}
        </div>
        <div
          className="change"
          style={{
            color: props.data.priceChange1w < 0 ? "#D46F76" : "#50A973",
            fontWeight: "600",
          }}
        >
          {props.data.priceChange1w < 0 ? (
            <ArrowDropDownIcon style={{ fill: "#D46F76" }} />
          ) : (
            <ArrowDropUpIcon style={{ fill: "#50A973" }} />
          )}
          {props.data.priceChange1w}
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  .card {
    width: 100%;
    height: 50px;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background-color: blue;
    .name {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .names {
        text-align: end;
      }
      .symbol {
        background-color: #6c757d;
        color: white;
        text-align: center;
        padding: 2px;
      }
      align-items: center;
      justify-content: space-between;
      img {
        height: 32px;
        width: 32px;
      }
    }
    .marketcap,
    .price,
    .volume,
    .circulating-supply,
    .change {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  hr {
    border: 1px dashed #bfbfbf;
    margin-top: 5px;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    .card {
      grid-template-columns: repeat(3, 1fr);
      .name {
        display: flex;
        justify-content: space-between;
        .symbol {
          display: none;
        }
      }
      .volume,
      .circulating-supply,
      .change {
        display: none;
      }

      .name,
      .marketcap,
      .price {
        padding: 10px;
      }
    }
  }
`;
