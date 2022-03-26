import { graphql } from 'gatsby';
import 'intersection-observer';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Astronauts } from '../components/Astronauts';
import { FlightPath } from '../components/FlightPath';
import { LaunchPrep } from '../components/LaunchPrep';
import { Mission } from '../components/Mission';
import { NavBar } from '../components/NavBar';
import { Partners } from '../components/Partners';
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

const ShortSection = styled.div`
  @media (min-width: 768px) and (min-height: 800px) {
    position: relative;
    height: 70vh;
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
  const flightpathRef = useRef<HTMLDivElement>(null);
  const astronautsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const anchors = {
    '#home': splashRef,
    '#mission': missionRef,
    '#whitepaper': whitePaperRef,
    '#launchprep': launchPrepRef,
    '#spaceflight': spaceflightRef,
    '#flightpath': flightpathRef,
    '#astronauts': astronautsRef,
    '#partners': partnersRef,
  };
  const copyNodes = data.allMarkdownRemark.nodes;
  const astroData = data.allAstronautsJson.nodes;
  return (
    <SnapLayout ref={snapRef} isScroll={isScroll} setIsScroll={setIsScroll}>
      <Helmet>
        <meta name="title" content="MUSK Gold" />
        <meta name="description" content="Gold of the Galaxy" />
        <meta property="og:title" content="MUSK Gold" />
        <meta property="og:description" content="Gold of the Galaxy" />
        <meta
          property="og:image"
          content="https://www.musk.gold/musk-icon.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@MuskGold" />
        <meta name="twitter:title" content="MUSK Gold" />
        <meta name="twitter:description" content="Gold of the Galaxy" />
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
        <Spaceflight />
      </Section>
      <Section id="flightpath" ref={flightpathRef}>
        <FlightPath />
      </Section>
      <Section id="astronauts" ref={astronautsRef}>
        <Astronauts astroData={astroData} />
      </Section>
      <ShortSection id="partners" ref={partnersRef}>
        <Partners />
      </ShortSection>
    </SnapLayout>
  );
};

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $language } } }
    ) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
    allAstronautsJson {
      nodes {
        id
        name
        desc
        url
        image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
