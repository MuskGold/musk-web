import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { AstronautsJson } from '../graphql';

const AstroItem = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: calc(50% - 10px);
  justify-content: center;
  @media (min-width: 768px) {
    width: 150px;
  }
  @media (min-width: 1280px) {
    width: 170px;
  }
`;

const Name = styled.div`
  font-family: 'Lato';
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  justify-self: center;
`;

const Desc = styled.div`
  font-family: 'Lato';
  color: #fff;
  font-size: 11px;
  font-weight: 300;
  justify-self: center;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 150px;
  justify-self: center;
  @media (min-width: 1280px) {
    width: 170px;
  }
`;

type AstronautProps = {
  astro: AstronautsJson;
};

export const Astronaut = ({ astro }: AstronautProps) => (
  <AstroItem>
    {astro?.image?.childImageSharp && (
      <StyledGatsbyImage
        image={astro.image.childImageSharp.gatsbyImageData}
        alt={astro.name || ''}
      />
    )}
    <Name>{astro.name}</Name>
    <Desc>{astro.desc}</Desc>
  </AstroItem>
);
