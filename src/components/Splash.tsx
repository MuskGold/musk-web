import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';
const RocketFire = React.lazy(() => import('./RocketFire'));

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: #8f0909;
  position: relative;
  overflow: hidden;
  height: 100vh;
  @media (min-width: 768px) {
    min-height: 800px;
  }
`;

const Bg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LeftPlanet = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const RocketImage = styled.img`
  position: absolute;
  width: 131px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Text1 = styled.h1`
  position: absolute;
  top: 70%;
  left: 50%;
  width: 300px;
  text-align: center;
  transform: translateX(-50%);
  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    width: auto;
    transform: translateX(-140%);
  }
  margin: 0;
  font-size: 60px;
  font-family: 'Lato';
  color: #f8c46a;
`;

const Text2 = styled.h1`
  position: absolute;
  top: 80%;
  left: 50%;
  width: 300px;
  text-align: center;
  transform: translateX(-50%);
  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    width: auto;
    transform: translateX(25%);
  }
  margin: 0;
  padding: 0;
  font-size: 60px;
  font-family: 'Lato';
  color: #f8c46a;
`;

const RocketStage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const BotCenter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;

const Arrow = styled.div`
  position: absolute;
  left: 4px;
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-width: 1px 1px 0 0;
  transform: translateX(-8px) rotate(135deg);
  opacity: 0.8;
  bottom: 60px;
`;

const Line1 = styled.div`
  position: absolute;
  height: 35px;
  width: 1px;
  bottom: 0;
  background: #fff;
  opacity: 0.3;
`;

export const Splash = () => {
  const isSSR = typeof window === 'undefined';
  return (
    <Container>
      <Bg src={Images.SplashBg} />
      <LeftPlanet src={Images.SplashLeftPlanet} />
      <RocketImage src={Images.SplashRocket} />
      {!isSSR && (
        <RocketStage>
          <Suspense fallback={null}>
            <RocketFire />
          </Suspense>
        </RocketStage>
      )}
      <Text1>Gold of</Text1>
      <Text2>the Galaxy</Text2>
      <BotCenter>
        <Arrow />
        <Line1 />
      </BotCenter>
    </Container>
  );
};
