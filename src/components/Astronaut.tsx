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

const Name = styled.a`
  font-family: 'Lato';
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  justify-self: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Desc = styled.div`
  font-family: 'Lato';
  color: #fff;
  font-size: 11px;
  font-weight: 300;
  justify-self: center;
`;

const Image = styled(GatsbyImage)`
  width: 150px;
  justify-self: center;
  @media (min-width: 1280px) {
    width: 170px;
  }
`;

const ImageLink = styled.a`
  display: block;
  width: 150px;
  @media (min-width: 1280px) {
    width: 170px;
  }
`;

type AstronautProps = {
  astro: AstronautsJson;
};

export const Astronaut = ({ astro }: AstronautProps) => {
  const image = astro?.image?.childImageSharp;
  const url = astro?.url;
  const name = astro?.name;
  const desc = astro?.desc;
  return (
    <AstroItem>
      {image &&
        (url ? (
          <ImageLink href={url} target="_blank" rel="noreferrer">
            <Image image={image.gatsbyImageData} alt={name || ''} />
          </ImageLink>
        ) : (
          <Image image={image.gatsbyImageData} alt={name || ''} />
        ))}
      {url && name && (
        <Name href={url} target="_blank" rel="noreferrer">
          {name}
        </Name>
      )}
      <Desc>{desc}</Desc>
    </AstroItem>
  );
};
