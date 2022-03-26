import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Container = styled.div`
  display: grid;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 70vh;
    min-height: 700px;
  }
`;

const Bg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContentGrid = styled.div`
  display: grid;
  position: relative;
  padding: 0 5%;
  @media (min-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
  }
`;

const TypeBlock = styled.div`
  display: grid;
  align-content: center;
  @media (min-width: 768px) {
    grid-column: 2 / span 5;
  }
`;

const MainContent = styled.div`
  padding: 40px 0;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h3`
  font-family: 'Lato';
  color: #e20900;
  margin: 0;
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (min-width: 1280px) {
    font-size: 42px;
  }
`;

const ImageLink = styled.a`
  display: inline-grid;
  background-color: #f5f5f5;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 250px;
    height: 100px;
  }
  @media (min-width: 1280px) {
    width: 300px;
    height: 125px;
  }
`;

const LinkImage = styled.img``;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 80px;
`;

export const Partners = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Bg src={Images.PartnersBg} alt="" />
      <ContentGrid>
        <TypeBlock>
          <MainContent>
            <Title>{t('partners.partnerships')}</Title>
            <Flex>
              <ImageLink href="https://brightworld.com/" title="Bright World">
                <LinkImage
                  width={190}
                  height={38}
                  src={Images.PartnerBrightWorld}
                  alt="Bright World"
                />
              </ImageLink>
              <ImageLink href="https://www.ambergroup.io/" title="Amber Group">
                <LinkImage
                  width={142}
                  height={24}
                  src={Images.PartnerAmberGroup}
                  alt="Amber Group"
                />
              </ImageLink>
              <ImageLink
                href="https://pivotalpointinvesting.com/"
                title="Pivotal Point Investing"
              >
                <LinkImage
                  width={168}
                  height={62}
                  src={Images.PartnerPivotalPoint}
                  alt="Pivotal Point Investing"
                />
              </ImageLink>
            </Flex>
            <Title>{t('partners.exchanges')}</Title>
            <Flex>
              <ImageLink
                href="https://www.digifinex.com/en-ww/trade/USDT/MUSK"
                title="Digifinex"
              >
                <LinkImage
                  width={161}
                  height={30}
                  src={Images.ExchangeDigifinex}
                  alt="Digifinex"
                />
              </ImageLink>
              <ImageLink
                href="https://www.mexc.com/exchange/MUSK_USDT"
                title="MEXC"
              >
                <LinkImage
                  width={176}
                  height={22}
                  src={Images.ExchangeMexc}
                  alt="MEXC"
                />
              </ImageLink>
              <ImageLink
                href="https://app.uniswap.org/#/swap?outputCurrency=0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8&chain=mainnet"
                title="Uniswap"
              >
                <LinkImage
                  width={162}
                  height={36}
                  src={Images.ExchangeUniswap}
                  alt="Uniswap"
                />
              </ImageLink>
            </Flex>
          </MainContent>
        </TypeBlock>
      </ContentGrid>
    </Container>
  );
};
