import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  background: #ffffff;
  gap: 20px;
  @media (min-width: 768px) {
    min-height: 700px;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 40px;
  text-align: center;
  justify-items: center;
`;

const MainTitle = styled.h1`
  font-family: 'Lato';
  color: #545556;
  margin: 0;
`;

const SwapLink = styled.a`
  font-family: 'Lato';
  color: #e20900;
  font-size: 16px;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Swaps = () => {
  return (
    <Container>
      <Content>
        <MainTitle>$MUSK Gold available now</MainTitle>
        <a
          href="https://app.uniswap.org/#/swap?outputCurrency=0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../assets/images/uniswap.png"
            alt="Uniswap"
            layout="fixed"
            width={300}
            height={70}
          />
        </a>
        <SwapLink
          href="https://app.uniswap.org/#/swap?outputCurrency=0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8"
          target="_blank"
          rel="noreferrer"
        >
          $MUSK on Uniswap
        </SwapLink>
      </Content>
    </Container>
  );
};
