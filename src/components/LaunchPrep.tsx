import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    grid-template-rows: auto 25% 1fr;
    height: 100vh;
    min-height: 700px;
  }
`;

const Title = styled.h3`
  font-family: 'Lato';
  color: #e20900;
  margin: 0;
  text-transform: uppercase;
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 60px;
  }
`;

const TopBars = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
  height: 30px;
`;

const TopLeftBar = styled.div`
  height: 30px;
  background: #d1d2d3;
`;

const TopRightBar = styled.div`
  height: 30px;
  background: #fff;
`;

const TitleBlock = styled.div`
  display: grid;
  position: relative;
  background: #f5f5f2;
  padding-left: calc(100% / 12);
  align-content: center;
  height: 120px;
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const TitleBar = styled.div`
  position: absolute;
  width: 1px;
  right: 20%;
  background: #e9e9e6;
`;

const ContentGrid = styled.div`
  display: inline-grid;
  grid-auto-flow: rows;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const GrayBar = styled.div`
  display: grid;
  background: #e3e3e0;
`;

const MainCol = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-column: 2 / span 5;
  }
  background: #f5f5f2;
`;

const LaunchImage = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`;

const TypeBlock = styled.div`
  padding-left: 5%;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-right: 10%;
  @media (min-width: 768px) {
    height: auto;
    padding-left: 10%;
  }
`;

const MainBar = styled.div`
  display: grid;
  width: 10%;
  height: 7px;
  background: #5e5e5b;
  margin-bottom: 5%;
`;

const TypeItem = styled.p`
  font-family: 'Lato';
  color: #787877;
  font-size: 18px;
`;

const TypeItemInfo = styled.span`
  font-weight: bold;
  color: #6e6e69;
`;

const AltCol = styled.div`
  display: grid;
  background: #fff;
  border-right: 1px solid #e9e9e6;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    grid-column: 7 / span 5;
  }
  @media (min-width: 1280px) {
    grid-column: 7 / span 4;
  }
`;

const AltGrid = styled.div`
  display: grid;
  grid-template-rows: 18% 1fr auto;
  background: #fff;
`;

const AltTitle = styled.h3`
  display: grid;
  font-family: 'Lato';
  font-size: 22px;
  align-content: center;
  padding-left: 5%;
  margin: 0;
  background: #fff;
  color: #545556;
  border-bottom: 1px solid #e9e9e6;
  height: 80px;
  @media (min-width: 768px) {
    height: auto;
    padding-left: 10%;
  }
`;

const AltList = styled.ol`
  list-style: none;
  counter-reset: item 6;
  padding-left: 5%;
  padding-top: 5%;
  @media (min-width: 768px) {
    padding-left: 10%;
  }
`;

const AltItem = styled.li`
  font-size: 16px;
  font-family: 'Lato';
  counter-increment: item -1;
  margin-bottom: 10px;
  color: #8e8f90;
  &:before {
    margin-right: 10px;
    content: counter(item);
    background: #de000f;
    color: #fff;
    width: 30px;
    height: 30px;
    display: inline-grid;
    justify-content: center;
    align-content: center;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

const AltLink = styled.a`
  color: #e20900;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FinCol = styled.div`
  position: relative;
  display: grid;
  @media (min-width: 768px) {
    grid-column: 12 / span 1;
  }
  @media (min-width: 1280px) {
    grid-column: 11 / span 2;
  }
  background: #fff;
`;

const FinBar = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  right: 0;
  background: #de000f;
  height: 100%;
  width: 5%;
`;

const StyledIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Contract = styled.div`
  font-size: 16px;
  font-family: 'Lato';
  margin-bottom: 30px;
  color: #8e8f90;
  padding: 5%;
  @media (min-width: 768px) {
    padding-left: 10%;
  }
`;

const ContractTitle = styled.div``;

const ContractCode = styled.div``;

const ContractInput = styled.input`
  font-size: 16px;
  font-family: 'Lato';
  color: #545556;
  width: 100%;
  border: 0;
  outline: 0;
  padding: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ContractLink = styled.a`
  font-size: 16px;
  font-family: 'Lato';
  color: #e20900;
  text-decoration: none;
  padding: 10px 0;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LaunchPrep = () => (
  <Container>
    <TopBars>
      <TopLeftBar />
      <TopRightBar />
    </TopBars>
    <TitleBlock>
      <Title>Prepare to launch</Title>
      <TitleBar />
    </TitleBlock>
    <ContentGrid>
      <GrayBar />
      <MainCol>
        <LaunchImage>
          <StyledIframe
            src="https://www.youtube.com/embed/8fXRKCwBBG8?enablejsapi=1&origin=https://www.musk.gold/"
            title="Prepare to Launch"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            width="480"
            height="360"
            allowFullScreen
          />
        </LaunchImage>
        <TypeBlock>
          <MainBar />
          <TypeItem>
            <TypeItemInfo>How To Acquire $Musk Gold on Uniswap</TypeItemInfo>{' '}
            Complete Guide
          </TypeItem>
        </TypeBlock>
      </MainCol>
      <AltCol>
        <AltGrid>
          <AltTitle>Countdown to Launch</AltTitle>
          <AltList reversed>
            <AltItem>
              Get a{' '}
              <AltLink href="https://metamask.io/">MetaMask Wallet</AltLink>
            </AltItem>
            <AltItem>
              Go to{' '}
              <AltLink href="https://app.uniswap.org/#/swap?outputCurrency=0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8">
                app.uniswap.org
              </AltLink>{' '}
              and prepare to swap
            </AltItem>
            <AltItem>Connect your MetaMask Wallet to Uniswap</AltItem>
            <AltItem>Swap your Ethereum for Musk Gold</AltItem>
            <AltItem>You are now ready for Spaceflight</AltItem>
          </AltList>
          <Contract>
            <ContractCode>
              <ContractTitle>Contract:</ContractTitle>
              <ContractInput
                readOnly
                value="0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8"
              />
            </ContractCode>
            <ContractLink
              href="https://etherscan.io/address/0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8"
              target="_blank"
              rel="noreferrer"
            >
              Etherscan
            </ContractLink>
          </Contract>
        </AltGrid>
      </AltCol>
      <FinCol>
        <FinBar />
      </FinCol>
    </ContentGrid>
  </Container>
);
