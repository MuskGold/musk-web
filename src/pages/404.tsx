import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { MiniNavBar } from '../components/MiniNavBar';
import { MiniSplash } from '../components/MiniSplash';

const Container = styled.div`
  display: grid;
  padding: 0 20px;
`;

const Content = styled.div`
  display: grid;
  position: relative;
  padding: 50px 0 250px;
  width: 100%;
  justify-self: center;
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
`;

const SubTitle = styled.h4`
  font-family: 'Lato';
  font-size: 30px;
  color: #333333;
  margin: 0;
`;

export default () => (
  <Layout>
    <Helmet title="Not Found" />
    <MiniNavBar />
    <MiniSplash />
    <Container>
      <Content>
        <Title>Not Found</Title>
        <SubTitle>404 This page does not exist</SubTitle>
      </Content>
    </Container>
  </Layout>
);
