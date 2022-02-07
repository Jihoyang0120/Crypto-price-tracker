import React from "react";
import styled from "styled-components";

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
`;
const Coin = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;
const CoinImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const CoinName = styled.span`
  font-size: 16px;
  width: 150px;
`;

const CoinSymbol = styled.span`
  text-transform: uppercase;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.span`
  width: 110px;
`;

const CoinVolume = styled.span`
  width: 155px;
`;
const CoinMarketCap = styled.span`
  width: 230px;
`;
const CoinPercentRed = styled.span`
  width: 100%;
  color: #f00606;
`;
const CoinpercentGreen = styled.span`
  width: 100%;
  color: #11d811;
`;

const Crypto = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <CoinContainer>
      <CoinRow>
        <Coin>
          <CoinImage src={image} alt="crypto" />
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </Coin>
        <CoinData>
          <CoinPrice>{price}원</CoinPrice>
          <CoinVolume>{volume.toLocaleString()}원</CoinVolume>
          {priceChange < 0 ? (
            <CoinPercentRed>{priceChange.toFixed(2)}%</CoinPercentRed>
          ) : (
            <CoinpercentGreen>{priceChange.toFixed(2)}%</CoinpercentGreen>
          )}
          <CoinMarketCap>시가총액:{marketcap.toLocaleString()}원</CoinMarketCap>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
};

export default Crypto;
