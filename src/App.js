import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Crypto from "./Crypto";
import GlobalStyle from "./GlobalStyle";

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
`;

const CoinSearch = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const CoinText = styled.span`
  font-family: "NanumBarunGothic", "serif";
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
    -225deg,
    #fcf6f4 0%,
    #c2b1ab 21%,
    #a38e86 100%
  );

  color: #e2e2e2;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Arial", "Sans-Serif";
    font-size: 15px;
    font-weight: bold;
    color: #000000;
  }
  :-ms-input-placeholder {
    font-family: "Arial", "Sans-Serif";
    font-size: 15px;
    font-weight: bold;
    color: #e2e2e2;
  }
`;

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <CoinApp>
        <CoinSearch>
          <CoinText> 가상화폐 가격</CoinText>
          <form>
            <CoinInput
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </CoinSearch>
        {filteredCoins.map((coin) => {
          return (
            <Crypto
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.total_volume}
            />
          );
        })}
      </CoinApp>
    </>
  );
}

export default App;
