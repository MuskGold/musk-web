import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';

const Container = styled.div`
  position: relative;
`;

const Content = styled.div``;

export const Layout: FC = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Helmet titleTemplate="%s · Musk Gold" defaultTitle="Musk Gold" />
    <Content>{children}</Content>
    <Footer />
  </Container>
);
