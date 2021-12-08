import React from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Container = styled.div`
  display: grid;
  height: 160px;
  justify-content: center;
  align-items: center;
  background: #8f0909;
  position: relative;
  overflow: hidden;
`;

const Overflow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SplashBg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const MiniSplash = () => (
  <Container>
    <Overflow>
      <SplashBg src={Images.SplashBg} />
    </Overflow>
  </Container>
);
