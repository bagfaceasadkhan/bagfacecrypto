import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSearch,
  updateCurrency,
  updateSymbol,
} from "../features/search/SearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const resp = await fetch("https://api.coinstats.app/public/v1/fiats");
      const respData = await resp.json();

      setCurrencies(respData);
    };
    fetchCurrency();
  }, []);

  return (
    <Container>
      <div className="search-container">
        <input
          onChange={(e) => {
            dispatch(updateSearch(e.target.value));
          }}
          type="text"
          placeholder="Search by name"
        />
      </div>
      <div className="se-container">
        <select
          id=""
          onChange={(e) => {
            let temp = e.target.value.split(" ");
            dispatch(updateSymbol(temp[1]));
            dispatch(updateCurrency(temp[0]));
          }}
        >
          <option value="USD $">USD</option>
          {currencies.map((val) => {
            return (
              <option value={val.name + " " + val.symbol} key={Math.random()}>
                {val.name}
              </option>
            );
          })}
        </select>
      </div>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .search-container {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    input[type="text"] {
      width: 100%;
      height: 70%;
      padding: 5px;
      border: 2px solid #bfbfbf;
    }
  }

  .se-container {
    height: 100%;
    width: 10%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    select {
      text-align: center;
      width: 100%;
      height: 70%;
      border: 2px solid #bfbfbf;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .search-container {
      width: 90%;
      height: 50%;
    }
    .se-container {
      width: 90%;
      margin-left: 0;
      height: 50%;
    }
  }
`;
