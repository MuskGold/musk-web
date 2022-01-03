import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Images } from '../constants/Images';
import { MarkdownRemark } from '../graphql';

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

const Content = styled.div`
  display: grid;
  position: relative;
  padding: 0 0 200px;
  width: 100%;
  justify-self: center;
  @media (min-width: 768px) {
    padding: 0 0 400px;
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
`;

const Hr = styled.hr`
  display: inline-block;
  width: 90px;
  height: 1px;
  border: 0;
  background: #bbb;
  text-align: left;
`;

const ContentGrid = styled.div`
  display: grid;
  z-index: 1;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 5px;
  }
`;

const TypeBlock = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / span 7;
  }
  @media (min-width: 1280px) {
    grid-column: 3 / span 6;
  }
`;

const SideBlock = styled.div`
  position: relative;
  @media (min-width: 768px) {
    grid-column: 9 / span 4;
  }
`;

const ImageInset = styled.div`
  position: relative;
  align-self: flex-end;
  @media (min-width: 768px) {
    top: 70%;
  }
`;

const RedBar = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50%;
  height: 30px;
  background: #e20900;
`;

const Info = styled.div`
  position: absolute;
  bottom: -40px;
  font-family: 'Lato';
  left: 0;
  font-size: 12px;
  color: #e20900;
`;

const TopCenter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`;

const Line1 = styled.div`
  position: absolute;
  height: 35px;
  width: 1px;
  top: 0;
  background: #e20900;
  opacity: 0.3;
`;

const Line2 = styled.div`
  position: absolute;
  top: 0;
  right: 18%;
  background: #eee;
  width: 1px;
  @media (min-width: 768px) {
    height: 1000px;
  }
`;

const Line3 = styled.div`
  position: absolute;
  top: 20%;
  right: 0;
  width: 18%;
  background: #eee;
  height: 1px;
`;

const JezeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const TypeHtml = styled.div`
  font-family: 'Lato';
  color: #888;
  font-size: 16px;
  line-height: 32px;
  span {
    color: #666;
  }
`;

const TopoMapBlock = styled.div`
  position: absolute;
  bottom: 0;
`;

const TopoMapImage = styled.img`
  display: block;
  width: 100%;
`;

type MissionProps = {
  copyNodes: MarkdownRemark[];
};

export const Mission = ({ copyNodes }: MissionProps) => {
  const [html, setHtml] = useState('');
  const init = useCallback(() => {
    const node = copyNodes.find(
      (nodes) => nodes?.frontmatter?.title === 'Mission',
    );
    const newHtml = node?.html ?? '';
    setHtml(newHtml);
  }, [copyNodes]);
  useEffect(init, [init]);
  return (
    <Container>
      <Content>
        <ContentGrid>
          <TypeBlock>
            <Title>
              The
              <br />
              Mission
            </Title>
            <Hr />
            <TypeHtml dangerouslySetInnerHTML={{ __html: html }} />
          </TypeBlock>
          <SideBlock>
            <ImageInset>
              <JezeroImage src={Images.JezeroCrater} alt="Jezero Crater" />
              <RedBar />
              <Info>{`// Angle on Jezero Crater`}</Info>
            </ImageInset>
          </SideBlock>
        </ContentGrid>
        <TopoMapBlock>
          <TopoMapImage src={Images.TopoMap} />
        </TopoMapBlock>
      </Content>
      <TopCenter>
        <Line1 />
      </TopCenter>
      <Line2 />
      <Line3 />
    </Container>
  );
};
