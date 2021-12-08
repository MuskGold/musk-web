import React, { useCallback, useState } from 'react';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Container = styled.div`
  position: relative;
  display: grid;
  @media (min-width: 768px) {
    grid-template-rows: 20% 50% auto;
    min-height: 700px;
    height: 100vh;
  }
`;

const TitleBlock = styled.div`
  display: grid;
  position: relative;
  align-content: center;
  @media (min-width: 768px) {
    padding-left: calc(100% / 12);
  }
  @media (min-width: 1280px) {
    padding-left: calc(100% / 6);
  }
`;

const Title = styled.h3`
  font-family: 'Lato';
  color: #e20900;
  margin: 0;
  text-transform: uppercase;
  font-size: 30px;
  padding: 2% 5%;
  @media (min-width: 768px) {
    padding: 0;
    font-size: 45px;
  }
  @media (min-width: 1280px) {
    font-size: 60px;
  }
`;

const ContentBlock = styled.div`
  position: relative;
`;

const ContentGrid = styled.div`
  display: inline-grid;
  padding: 0 5%;
  @media (min-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    height: 100%;
  }
`;

const MainContent = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column: 2 / span 10;
  }
  @media (min-width: 1280px) {
    grid-column: 3 / span 8;
  }
`;

const LeftCol = styled.div`
  padding-right: 20px;
`;

const RightCol = styled.div`
  padding-right: 20px;
`;

const NavGrid = styled.div`
  position: relative;
  display: inline-grid;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const LeftNav = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / span 5;
  }
  @media (min-width: 1280px) {
    grid-column: 3 / span 4;
  }
`;

const RightNav = styled.div`
  @media (min-width: 768px) {
    grid-column: 7 / span 5;
  }
  @media (min-width: 1280px) {
    grid-column: 7 / span 4;
  }
`;

const LeftNavBox = styled.div`
  position: relative;
  background: #e20900;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
`;

const RightNavBox = styled.div`
  position: relative;
  background: #e5e5e5;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
`;

const TypeItem = styled.p`
  font-family: 'Lato';
  color: #787877;
  line-height: 32px;
  font-family: 16px;
  @media (min-width: 768px) {
    font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1280 - 768)));
  }
  @media (min-width: 1280px) {
    font-weight: 300;
    line-height: 130%;
  }
  span {
    color: #666;
  }
`;

const LeftNavCaption = styled.div`
  position: absolute;
  left: 30px;
  bottom: 40px;
  font-family: 'Lato';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
`;

const RightNavCaption = styled.div`
  position: absolute;
  left: 30px;
  bottom: 40px;
  font-family: 'Lato';
  color: #e20900;
  font-size: 24px;
  line-height: 32px;
`;

const LeftNavImage = styled.img`
  position: absolute;
  width: 50%;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

const RightNavImage = styled.img`
  position: absolute;
  width: 70%;
  top: 70%;
  transform: translateY(-100%);
  right: 0;
`;

const ActiveContainer = styled.div`
  position: relative;
  display: grid;
  @media (min-width: 768px) {
    grid-column: 2 / span 11;
  }
  @media (min-width: 1280px) {
    grid-column: 3 / span 10;
  }
  background: #eee;
`;

const ActiveContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: calc(50% - (100% / 22)) auto;
  @media (min-width: 1280px) {
    grid-template-columns: calc(50% - (100% / 10)) auto;
  }
`;

const ActiveContentLeft = styled.div`
  position: relative;
`;

const ActiveContentRight = styled.div`
  position: relative;
`;

const InlineContainer = styled.div`
  position: relative;
  display: grid;
  @media (min-width: 768px) {
    grid-column: 2 / span 11;
  }
  @media (min-width: 1280px) {
    grid-column: 3 / span 10;
  }
`;

const InlineContent = styled.div`
  position: relative;
  display: grid;
  margin-bottom: 20px;
  background: #eee;
`;

const InlineContentLeft = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  padding: 20px;
`;

const InlineContentRight = styled.div`
  position: relative;
  padding: 20px;
`;

const InlineLeftImage = styled.img`
  max-width: 100%;
`;

const InlineLeftTypeItem = styled.div`
  font-family: 'Lato';
  color: #888;
  font-family: 18px;
  line-height: 32px;
  margin-bottom: 20px;
`;

const InlineLeftButton = styled.div`
  display: grid;
  align-content: center;
  padding: 20px 30px 20px 15px;
  font-family: 'Lato';
  border-left: 15px solid #e20900;
  color: #fff;
  background: #333333;
  font-size: 20px;
`;

const InlineRightImage = styled.img`
  max-width: 100%;
`;

const InlineRightTypeItem = styled.div`
  font-family: 'Lato';
  color: #888;
  font-family: 18px;
  line-height: 32px;
  margin-bottom: 20px;
`;

const InlineRightButton = styled.div`
  display: grid;
  align-content: center;
  padding: 20px 30px 20px 15px;
  font-family: 'Lato';
  border-left: 15px solid #e20900;
  color: #fff;
  background: #333333;
  font-size: 20px;
`;

const LeftImage = styled.img`
  position: absolute;
  top: 150px;
  right: 0;
  max-width: 120%;
`;

const LeftTypeItem = styled.div`
  position: absolute;
  top: 40%;
  font-family: 'Lato';
  color: #888;
  font-size: 20px;
  line-height: 32px;
  left: 40px;
`;

const LeftButton = styled.div`
  position: absolute;
  display: grid;
  align-content: center;
  padding: 20px 30px 20px 15px;
  top: 10%;
  left: 40px;
  font-family: 'Lato';
  border-left: 15px solid #e20900;
  color: #fff;
  background: #333333;
  font-size: 20px;
`;

const RightImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  max-width: 100%;
`;

const RightTypeItem = styled.div`
  position: absolute;
  top: 40%;
  left: 40px;
  font-family: 'Lato';
  color: #888;
  font-size: 20px;
  line-height: 32px;
`;

const RightButton = styled.div`
  position: absolute;
  display: grid;
  align-content: center;
  padding: 20px 30px 20px 15px;
  top: 10%;
  left: 40px;
  font-family: 'Lato';
  border-left: 15px solid #e20900;
  color: #fff;
  background: #333333;
  font-size: 20px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  cursor: pointer;
`;

const CloseArrow = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 22px;
  height: 22px;
  &:before,
  &:after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 23px;
    width: 2px;
    background: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const CloseBox = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background: #e20900;
`;

const CloseText = styled.div`
  font-family: 'Lato';
  color: #777777;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 20px;
`;

export const Rocketplace = () => {
  const isDesktop = useMedia('(min-width: 768px)');
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const showContent = !isLeft && !isRight;
  const toggleLeft = useCallback(() => {
    setIsLeft(!isLeft);
    setIsRight(false);
  }, [isLeft]);
  const toggleRight = useCallback(() => {
    setIsLeft(false);
    setIsRight(!isRight);
  }, [isRight]);
  const showCloseOver = useCallback(() => {
    setShowClose(true);
  }, []);
  const showCloseOut = useCallback(() => {
    setShowClose(false);
  }, []);
  const closeAll = useCallback(() => {
    setIsLeft(false);
    setIsRight(false);
    setShowClose(false);
  }, []);
  return (
    <Container>
      <TitleBlock>
        <Title>Rocketplace</Title>
      </TitleBlock>
      <ContentBlock>
        <ContentGrid>
          {!showContent && (
            <ActiveContainer>
              {isLeft && (
                <ActiveContent>
                  <ActiveContentLeft>
                    <LeftImage src={Images.RocketPlaceTesla} />
                  </ActiveContentLeft>
                  <ActiveContentRight>
                    <LeftTypeItem>Tesla Auction - coming soon</LeftTypeItem>
                    <LeftButton>Enter auction here</LeftButton>
                  </ActiveContentRight>
                </ActiveContent>
              )}
              {isRight && (
                <ActiveContent>
                  <ActiveContentLeft>
                    <RightImage src={Images.RocketPlaceSun} />
                  </ActiveContentLeft>
                  <ActiveContentRight>
                    <RightTypeItem>
                      Space-X Moon Spaceflight - coming soon
                    </RightTypeItem>
                    <RightButton>Enter auction here</RightButton>
                  </ActiveContentRight>
                </ActiveContent>
              )}
              <CloseButton
                onMouseOver={showCloseOver}
                onMouseOut={showCloseOut}
                onClick={closeAll}
              >
                <CloseBox>
                  <CloseArrow />
                </CloseBox>
                {showClose && <CloseText>Close</CloseText>}
              </CloseButton>
            </ActiveContainer>
          )}
          {showContent && (
            <MainContent>
              <LeftCol>
                <TypeItem>
                  For the first time in history, RocketPlace will be tokenizing
                  assets and commodities available throughout the solar system.
                  The initial phase will include real and virtual collective
                  cars on the blockchain with an app being currently developed.
                  This will be a fully inclusive marketplace similar to the way
                  Amazon started with books and now everything under the sun.
                  RocketPlace will begin with an Independent Market for new and
                  used Electric Cars with an incentive-based system when you use{' '}
                  <span>$MUSK Gold</span>.
                </TypeItem>
              </LeftCol>
              <RightCol>
                <TypeItem>
                  It is a fully integral system with room to grow and progress,
                  giving the community the opportunity to find deals and
                  participate in the free market system. We will encourage
                  others to join our community and create a safe place where
                  there will be the opportunity to exchange or trade products
                  with an emphasis on the metaverse. We embrace NFT’S,
                  futuristic markets, as well as standard goods and services. We
                  are creating a super active and social community and will
                  continue to build these ideas as the Roadmap of the future
                  begins to come into view.
                </TypeItem>
              </RightCol>
            </MainContent>
          )}
          {!isDesktop && (
            <InlineContainer>
              <InlineContent>
                <InlineContentLeft>
                  <InlineLeftImage src={Images.RocketPlaceTesla} />
                </InlineContentLeft>
                <InlineContentRight>
                  <InlineLeftTypeItem>
                    Tesla Auction - coming soon
                  </InlineLeftTypeItem>
                  <InlineLeftButton>Enter auction here</InlineLeftButton>
                </InlineContentRight>
              </InlineContent>
              <InlineContent>
                <InlineContentLeft>
                  <InlineRightImage src={Images.RocketPlaceSun} />
                </InlineContentLeft>
                <InlineContentRight>
                  <InlineRightTypeItem>
                    Space-X Moon Spaceflight - coming soon
                  </InlineRightTypeItem>
                  <InlineRightButton>Enter auction here</InlineRightButton>
                </InlineContentRight>
              </InlineContent>
            </InlineContainer>
          )}
        </ContentGrid>
      </ContentBlock>
      {isDesktop && (
        <NavGrid>
          <LeftNav>
            <LeftNavBox onClick={toggleLeft}>
              <LeftNavImage src={Images.RocketPlaceTesla} />
              <LeftNavCaption>
                Click here to enter
                <br />
                Tesla auction
              </LeftNavCaption>
            </LeftNavBox>
          </LeftNav>
          <RightNav>
            <RightNavBox onClick={toggleRight}>
              <RightNavImage src={Images.RocketPlaceSun} />
              <RightNavCaption>
                Space-X
                <br />
                Moon Spaceflight
              </RightNavCaption>
            </RightNavBox>
          </RightNav>
        </NavGrid>
      )}
    </Container>
  );
};
