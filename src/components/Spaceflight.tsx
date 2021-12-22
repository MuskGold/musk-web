import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';
import { MarkdownRemark } from '../graphql';

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

const Line1 = styled.div`
  position: absolute;
  left: 14%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #fff;
  opacity: 0.1;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
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

const SideBlock = styled.div`
  display: grid;
  align-content: center;
  @media (min-width: 768px) {
    grid-column: 5 / span 2;
  }
`;

const Title = styled.h3`
  font-family: 'Lato';
  color: #e20900;
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

const TypeItem = styled.p`
  font-family: 'Lato';
  color: #cccccc;
  line-height: 32px;
  span {
    color: #ffffff;
  }
`;

const Content = styled.div`
  @media (min-width: 768px) {
    padding-right: 20%;
  }
`;

const SideItem = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px 0 35px;
`;

const TypeLink = styled.a`
  color: #e20900;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

type SpaceflightProps = {
  copyNodes: MarkdownRemark[];
};

export const Spaceflight = ({ copyNodes }: SpaceflightProps) => {
  const [html, setHtml] = useState('');
  const init = useCallback(() => {
    const node = copyNodes.find(
      (nodes) => nodes?.frontmatter?.title === 'Spaceflight',
    );
    const newHtml = node?.html ?? '';
    setHtml(newHtml);
  }, [copyNodes]);
  useEffect(init, [init]);
  return (
    <Container>
      <Bg src={Images.SpaceFlightBg} alt="" />
      <Line1 />
      <ContentGrid>
        <TypeBlock>
          <MainContent>
            <Title>Spaceflight</Title>
            <Content>
              <TypeItem dangerouslySetInnerHTML={{ __html: html }} />
            </Content>
          </MainContent>
        </TypeBlock>
        <SideBlock>
          <SideItem>
            <TypeItem>
              Follow
              <br />
              <TypeLink href="https://twitter.com/ElonMusk">
                @ElonMusk
              </TypeLink>{' '}
              on Twitter
            </TypeItem>
          </SideItem>
          <SideItem>
            <TypeItem>
              Follow
              <br />
              <TypeLink href="https://twitter.com/MuskGold">
                @MuskGold
              </TypeLink>{' '}
              on Twitter
            </TypeItem>
          </SideItem>
        </SideBlock>
      </ContentGrid>
    </Container>
  );
};
