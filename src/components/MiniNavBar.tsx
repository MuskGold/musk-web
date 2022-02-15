import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Grid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 70px;
  padding-top: 40px;
  z-index: 100;
  scroll-snap-stop: always;
  scroll-snap-align: start;
`;

const Content = styled.div`
  display: grid;
  padding: 10px 10px 10px 100px;
`;

const LogoLink = styled(Link)`
  width: 143px;
  height: 50px;
  overflow: hidden;
`;

const LogoImage = styled.img`
  display: block;
  width: 143px;
  height: 50px;
  overflow: hidden;
`;

export const MiniNavBar = () => (
  <Grid>
    <Content>
      <LogoLink to="/">
        <LogoImage src={Images.MuskNavIcon} alt="" />
      </LogoLink>
    </Content>
  </Grid>
);
