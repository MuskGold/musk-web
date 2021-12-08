import React, {
  Dispatch,
  forwardRef,
  PropsWithChildren,
  SetStateAction,
} from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';

const Container = styled.div<Scrolling>`
  position: relative;
  @media (min-width: 768px) and (min-height: 800px) {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: ${({ isScroll }) => (isScroll ? `y mandatory` : `none`)};
  }
`;

const Content = styled.div``;

type Scrolling = {
  isScroll: boolean;
};
type SnapLayoutProps = PropsWithChildren<
  Scrolling & {
    setIsScroll: Dispatch<SetStateAction<boolean>>;
  }
>;

export const SnapLayout = forwardRef<HTMLDivElement, SnapLayoutProps>(
  ({ children, isScroll, setIsScroll }: SnapLayoutProps, ref) => (
    <Container id="snap" ref={ref} isScroll={isScroll}>
      <GlobalStyle />
      <Helmet titleTemplate="%s · Musk Gold" defaultTitle="Musk Gold" />
      <Content>{children}</Content>
      <Footer setIsScroll={setIsScroll} />
    </Container>
  ),
);
