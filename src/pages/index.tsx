import { graphql } from 'gatsby';
import 'intersection-observer';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { LaunchPrep } from '../components/LaunchPrep';
import { Mission } from '../components/Mission';
import { NavBar } from '../components/NavBar';
import { SideNavBar } from '../components/SideNavBar';
import { SnapLayout } from '../components/SnapLayout';
import { Spaceflight } from '../components/Spaceflight';
import { Splash } from '../components/Splash';
import { Whitepaper } from '../components/Whitepaper';
import { QueryProps } from '../interfaces';

const Section = styled.div`
  @media (min-width: 768px) and (min-height: 800px) {
    position: relative;
    height: 100vh;
    scroll-snap-align: start;
  }
`;

export default ({ data }: QueryProps) => {
  const [isScroll, setIsScroll] = useState(true);
  const snapRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const whitePaperRef = useRef<HTMLDivElement>(null);
  const launchPrepRef = useRef<HTMLDivElement>(null);
  const spaceflightRef = useRef<HTMLDivElement>(null);
  const anchors = {
    '#home': splashRef,
    '#mission': missionRef,
    '#whitepaper': whitePaperRef,
    '#launchprep': launchPrepRef,
    '#spaceflight': spaceflightRef,
  };
  const copyNodes = data.allMarkdownRemark.nodes;
  return (
    <SnapLayout ref={snapRef} isScroll={isScroll} setIsScroll={setIsScroll}>
      <Helmet>
        <meta name="description" content="Gold of the Galaxy" />
      </Helmet>
      <SideNavBar
        snapRef={snapRef}
        anchors={anchors}
        setIsScroll={setIsScroll}
      />
      <NavBar snapRef={snapRef} anchors={anchors} setIsScroll={setIsScroll} />
      <Section id="home" ref={splashRef}>
        <Splash />
      </Section>
      <Section id="mission" ref={missionRef}>
        <Mission copyNodes={copyNodes} />
      </Section>
      <Section id="whitepaper" ref={whitePaperRef}>
        <Whitepaper />
      </Section>
      <Section id="launchprep" ref={launchPrepRef}>
        <LaunchPrep />
      </Section>
      <Section id="spaceflight" ref={spaceflightRef}>
        <Spaceflight copyNodes={copyNodes} />
      </Section>
    </SnapLayout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
  }
`;
