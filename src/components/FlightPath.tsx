import React from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Container = styled.div`
  display: grid;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  background: #f6f5f1;
  @media (min-width: 768px) {
    height: 100vh;
    min-height: 850px;
    padding-bottom: 0;
  }
`;

const Content = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  align-content: center;
  justify-self: center;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Title = styled.h2`
  font-family: 'Lato';
  text-transform: uppercase;
  color: #e20900;
  font-size: 48px;
  font-weight: 700;
  margin: 40px 0 20px;
  @media (min-width: 768px) {
    margin: 0 0 20px;
  }
`;

const SubTitle = styled.h3`
  font-family: 'Lato';
  color: #6e6e69;
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 20px;
`;

const YearTitle = styled.h4`
  font-family: 'Lato';
  color: #e20900;
  font-size: 26px;
  font-weight: 900;
  margin: 10px 0 10px;
`;

const ContentGrid = styled.div`
  display: grid;
  position: relative;
  z-index: 1;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 40px;
  }
`;

const TypeBlock = styled.div`
  position: relative;
  @media (min-width: 768px) {
    grid-column: 2 / span 7;
  }
  @media (min-width: 1280px) {
    grid-column: 2 / span 7;
  }
`;

const SideBlock = styled.div`
  display: grid;
  align-content: center;
  position: relative;
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 0;
    grid-column: 9 / span 4;
  }
`;

const ImageInset = styled.div`
  position: relative;
`;

const DarkBar = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 50%;
  height: 20px;
  background: #414042;
`;

const Line1 = styled.div`
  display: none;
  position: absolute;
  height: 2000px;
  width: 1px;
  top: 0;
  background: #ddd;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    display: block;
  }
`;

const FlightPathSideImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 5;
`;

const TypeItem = styled.p`
  font-family: 'Lato';
  color: #888;
  font-size: 16px;
  line-height: 32px;
  span {
    color: #666;
  }
`;

const SphereBlock = styled.div`
  position: absolute;
  width: 800px;
  transform: translate(-46%, -80%);
  @media (min-width: 768px) {
    transform: translate(-47.5%, -85%);
  }
`;

const SphereLinesImage = styled.img`
  display: block;
  max-width: 100%;
`;

const Quarters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Quarter = styled.div``;

const QTitle = styled.h5`
  font-family: 'Lato';
  color: #6e6e69;
  font-size: 16px;
  font-weight: 900;
  margin: 0 0 10px;
`;

const QList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const QItem = styled.li`
  border-left: 4px solid #ff0037;
  padding-left: 10px;
  margin-bottom: 10px;
  font-family: 'Lato';
  color: #888;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const QLine = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(-10px + -4%);
  height: 5px;
  width: 4%;
  background: #6e6e69;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const FlightPath = () => {
  return (
    <Container>
      <Content>
        <ContentGrid>
          <TypeBlock>
            <Title>Flight Path</Title>
            <SubTitle>The time is now. We have lift off. </SubTitle>
            <TypeItem>
              This is a ROADMAP to the future. A brighter, more inclusive future
              begins today — one where everyone can join in and become integral
              as a collective force toward lifting the human consciousness to a
              higher acknowledgement of the power of uniting with each other to
              BE THE CHANGE.
            </TypeItem>
            <YearTitle>2021</YearTitle>
            <Quarters>
              <Quarter>
                <QTitle>Q1</QTitle>
                <QList>
                  <QItem>Initial Creation of $Musk Gold</QItem>
                  <QItem>White Paper Draft v1</QItem>
                </QList>
              </Quarter>
              <Quarter>
                <QTitle>Q2</QTitle>
                <QList>
                  <QItem>Team Formation</QItem>
                  <QItem>Website Design Begins</QItem>
                </QList>
              </Quarter>
              <Quarter>
                <QTitle>Q3</QTitle>
                <QList>
                  <QItem>Astronauts (aka Advisors) Panel formation</QItem>
                  <QItem>Official Website Musk.Gold is Live</QItem>
                </QList>
              </Quarter>
              <Quarter>
                <QTitle>Q4</QTitle>
                <QList>
                  <QItem>Musk Gold Token Creation</QItem>
                  <QItem>Copper + Uniswap Launch</QItem>
                  <QItem>White Paper Released</QItem>
                </QList>
              </Quarter>
            </Quarters>
            <YearTitle>2022</YearTitle>
            <Quarters>
              <Quarter>
                <QTitle>Q1</QTitle>
                <QList>
                  <QItem>Astronaut Announcements</QItem>
                  <QItem>Rocketplace Dev Begins</QItem>
                </QList>
              </Quarter>
              <Quarter>
                <QTitle>Q2</QTitle>
                <QList>
                  <QItem>Musk NFT&apos;s Launch</QItem>
                  <QItem>Partnerships Announcements</QItem>
                </QList>
              </Quarter>
              <Quarter>
                <QTitle>Q3</QTitle>
                <QList>
                  <QItem>Musk Gold App Launch</QItem>
                </QList>
              </Quarter>
              <Quarter>
                <QTitle>Q4</QTitle>
                <QList>
                  <QItem>Musk Gold Card Launch</QItem>
                  <QItem>Space Flight Ticket Rewards</QItem>
                </QList>
              </Quarter>
            </Quarters>
            <QLine />
          </TypeBlock>
          <SideBlock>
            <ImageInset>
              <FlightPathSideImage
                src={Images.FlightPathSide}
                alt="Flight Path"
              />
              <DarkBar />
              <SphereBlock>
                <SphereLinesImage src={Images.SphereLines} alt="" />
              </SphereBlock>
              <Line1 />
            </ImageInset>
          </SideBlock>
        </ContentGrid>
      </Content>
    </Container>
  );
};
