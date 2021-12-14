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

const Title = styled.h2`
  font-family: 'Lato';
  color: #5e5e5b;
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

const SubTitle = styled.h3`
  font-family: 'Lato';
  color: #787877;
  margin: 0;
`;

export const Swaps = () => {
  return (
    <Container>
      <Content>
        <MainTitle>$MUSK Gold available now</MainTitle>
        <Title>Find our live Auction on Copper Launch:</Title>
        <StaticImage
          src="../assets/images/copper-launch.png"
          alt="Copper Launch"
          layout="fixed"
          width={165}
          height={70}
        />
        <SwapLink href="https://copperlaunch.com/auctions/0x8175C3893a54238E0f1350075D17C177BF789A24">
          $MUSK on CopperLaunch
        </SwapLink>
        <Title>Upcoming Uniswap</Title>
        <StaticImage
          src="../assets/images/uniswap.png"
          alt="Uniswap"
          layout="fixed"
          width={300}
          height={70}
        />
        <SubTitle>on Wednesday, December 15th</SubTitle>
      </Content>
    </Container>
  );
};
