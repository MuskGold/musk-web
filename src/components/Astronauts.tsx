import React from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';
import { AstronautsJson } from '../graphql';
import { Astronaut } from './Astronaut';

const Container = styled.div`
  display: grid;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 100vh;
    min-height: 850px;
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
  padding: 0;
  @media (min-width: 768px) {
    padding: 0 5%;
  }
  @media (min-width: 1280px) {
    padding: 0 7%;
  }
  @media (min-width: 1600px) {
    padding: 0 15%;
  }
`;

const CenterBlock = styled.div`
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
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  font-size: 30px;
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
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 40px;
`;

const AstroGrid = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 25px;
  width: 100%;
  column-gap: 10px;
  @media (min-width: 768px) {
    column-gap: 15px;
    row-gap: 20px;
  }
  @media (min-width: 1280px) {
    column-gap: 20px;
    row-gap: 15px;
  }
`;

type AstronautsProps = {
  astroData: AstronautsJson[];
};

export const Astronauts = ({ astroData }: AstronautsProps) => {
  return (
    <Container>
      <Bg src={Images.AstronautsBg} alt="" />
      <ContentGrid>
        <CenterBlock>
          <MainContent>
            <Title>Astronauts</Title>
            <SubTitle>Advisors for our Mission to Mars</SubTitle>
            <AstroGrid>
              {astroData.map((astro) => (
                <Astronaut key={astro.id} astro={astro} />
              ))}
            </AstroGrid>
          </MainContent>
        </CenterBlock>
      </ContentGrid>
    </Container>
  );
};
