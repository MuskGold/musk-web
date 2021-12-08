import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import React, {
  Dispatch,
  MouseEvent,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { Images } from '../constants/Images';

gsap.registerPlugin(ScrollToPlugin);

const Grid = styled.div`
  position: absolute;
  grid-auto-flow: row;
  @media (min-width: 768px) {
    grid-auto-flow: column;
  }
  display: grid;
  width: 100%;
  margin-top: 40px;
  height: 70px;
  z-index: 100;
`;

const LogoContent = styled.div`
  display: grid;
  padding: 10px;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 10px 10px 10px 100px;
  }
`;

const NavContent = styled.div`
  display: grid;
  justify-content: center;
  padding: 10px;
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding: 10px 100px 10px 10px;
  }
  @media (min-width: 1280px) {
    padding: 10px 120px 10px 10px;
  }
  grid-auto-flow: column;
`;

const LogoLink = styled.a`
  width: 143px;
  height: 50px;
  overflow: hidden;
`;

const LogoImage = styled.img`
  display: block;
  width: 143px;
  height: 50px;
  overflow: hidden;
`;

const NavLinks = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  gap: 5px;
`;

const NavLink = styled.a`
  display: grid;
  font-family: 'Lato';
  justify-content: center;
  align-content: center;
  height: 100%;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 0 10px;
  font-size: 12px;
  @media (min-width: 768px) {
    padding: 0 20px;
    font-size: 14px;
  }
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

type NavBarProps = {
  snapRef: MutableRefObject<HTMLDivElement | null>;
  anchors: {
    [key: string]: MutableRefObject<HTMLDivElement | null>;
  };
  setIsScroll: Dispatch<SetStateAction<boolean>>;
};

export const NavBar = ({ snapRef, anchors, setIsScroll }: NavBarProps) => {
  const tween = useRef<gsap.core.Tween | null>(null);
  const isSnap = useMedia('(min-width: 768px) and (min-height: 800px)');

  const scrollTo = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const target = event.currentTarget;
      const attKey = target.getAttribute('href') as keyof typeof anchors;
      const currRef = anchors[attKey];
      if (snapRef.current && currRef.current) {
        setIsScroll(false);
        const scroller = isSnap ? snapRef.current : window;
        tween.current = gsap.to(scroller, {
          duration: 0.5,
          scrollTo: currRef.current,
          overwrite: 'auto',
        });
      }
    },
    [anchors, isSnap, setIsScroll, snapRef],
  );

  const wheelUpdate = useCallback(() => {
    if (snapRef.current) {
      snapRef.current.addEventListener('wheel', () => {
        setIsScroll(true);
        if (tween.current?.isActive) {
          tween.current.kill();
        }
      });
    }
    return () => {
      tween.current?.kill();
    };
  }, [setIsScroll, snapRef]);

  useEffect(wheelUpdate, [wheelUpdate]);
  return (
    <Grid>
      <LogoContent>
        <LogoLink href="#home" onClick={scrollTo}>
          <LogoImage src={Images.MuskNavIcon} />
        </LogoLink>
      </LogoContent>
      <NavContent>
        <NavLinks>
          <NavLink href="#mission" onClick={scrollTo}>
            The Mission
          </NavLink>
          <NavLink href="#whitepaper" onClick={scrollTo}>
            White paper
          </NavLink>
          <NavLink href="#launchprep" onClick={scrollTo}>
            Launch Prep
          </NavLink>
          <NavLink href="#spaceflight" onClick={scrollTo}>
            Space
            <wbr />
            flight
          </NavLink>
        </NavLinks>
      </NavContent>
    </Grid>
  );
};
