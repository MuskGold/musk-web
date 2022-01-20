import React from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Container = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  height: 100vh;
  @media (min-width: 768px) {
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
    grid-column: 2 / span 3;
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
  font-size: 30px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 45px;
  }
  @media (min-width: 1280px) {
    font-size: 60px;
  }
`;

const SubTitle = styled.h3`
  font-family: 'Lato';
  color: #cccccc;
  font-size: 14px;
  font-weight: 400;
  margin: 20px 0 20px;
`;

const Content = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  @media (min-width: 768px) {
    padding-right: 20%;
  }
`;

const StyledIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Spaceflight = () => {
  return (
    <Container>
      <Bg src={Images.SpaceFlightBg} alt="" />
      <ContentGrid>
        <TypeBlock>
          <MainContent>
            <Title>Lift Off</Title>
            <SubTitle>
              $MUSK Gold &ldquo;The Gold of the Galaxy&rdquo; Commercial
            </SubTitle>
            <Content>
              <StyledIframe
                src="https://www.youtube.com/embed/GW6zC5ltoUM?enablejsapi=1&origin=https://www.musk.gold/"
                title="Prepare to Launch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                width="480"
                height="360"
                allowFullScreen
              />
            </Content>
          </MainContent>
        </TypeBlock>
      </ContentGrid>
    </Container>
  );
};
