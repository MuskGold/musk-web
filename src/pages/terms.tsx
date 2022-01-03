import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { MiniNavBar } from '../components/MiniNavBar';
import { MiniSplash } from '../components/MiniSplash';
import { QueryProps } from '../interfaces';

const Container = styled.div`
  display: grid;
  padding: 0 20px;
`;

const Content = styled.div`
  display: grid;
  position: relative;
  padding: 50px 0 50px;
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

const ContentGrid = styled.div`
  display: grid;
  z-index: 1;
  grid-template-columns: repeat(6, 1fr);
`;

const TypeBlock = styled.div`
  grid-column: 2 / span 4;
`;

const TypeHtml = styled.div`
  font-family: 'Lato';
  color: #333333;
  line-height: 40px;
  span {
    color: #000000;
  }
`;

export default ({ data }: QueryProps) => {
  const node = data.allMarkdownRemark.nodes[0];
  const html = node.html ?? '';
  return (
    <Layout>
      <Helmet title="Terms" />
      <MiniNavBar />
      <MiniSplash />
      <Container>
        <Content>
          <ContentGrid>
            <TypeBlock>
              <Title>
                The
                <br />
                Terms
              </Title>
              <TypeHtml dangerouslySetInnerHTML={{ __html: html }} />
            </TypeBlock>
          </ContentGrid>
        </Content>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Terms" } } }) {
      nodes {
        html
      }
    }
  }
`;
