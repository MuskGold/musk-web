import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';
import styled from 'styled-components';
import { SideNavBarLink } from './SideNavBarLink';

const Container = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: grid;
  }
  position: fixed;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  z-index: 200;
`;

type SideNavBarProps = {
  snapRef: MutableRefObject<HTMLDivElement | null>;
  anchors: {
    [key: string]: MutableRefObject<HTMLDivElement | null>;
  };
  setIsScroll: Dispatch<SetStateAction<boolean>>;
};

export const SideNavBar = ({
  anchors,
  snapRef,
  setIsScroll,
}: SideNavBarProps) => (
  <Container>
    {Object.keys(anchors).map((anchor) => {
      const key = anchor.replace('#', 'anchor-');
      const section = anchors[anchor as keyof typeof anchors];
      return (
        <SideNavBarLink
          key={key}
          snapRef={snapRef}
          anchor={anchor}
          section={section}
          setIsScroll={setIsScroll}
        />
      );
    })}
  </Container>
);
