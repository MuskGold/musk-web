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
import { useInView } from 'react-intersection-observer';
import { useMedia } from 'react-use';
import styled from 'styled-components';

gsap.registerPlugin(ScrollToPlugin);

const Bar = styled.a<{ active: boolean }>`
  height: 20px;
  background: transparent;
  width: 10px;
  margin-bottom: 4px;
  span {
    display: block;
    background: #ffaa3f;
    height: 20px;
    width: ${({ active }) => (active ? '3px' : '1px')};
    margin-left: ${({ active }) => (active ? '0' : '1px')};
    span {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
`;

type SideNavBarLinkProps = {
  anchor: string;
  section: MutableRefObject<HTMLDivElement | null>;
  snapRef: MutableRefObject<HTMLDivElement | null>;
  setIsScroll: Dispatch<SetStateAction<boolean>>;
};

export const SideNavBarLink = ({
  anchor,
  section,
  snapRef,
  setIsScroll,
}: SideNavBarLinkProps) => {
  const [inViewRef, inView] = useInView({ threshold: 0.5 });
  const tween = useRef<gsap.core.Tween | null>(null);
  const isSnap = useMedia('(min-width: 768px) and (min-height: 800px)');
  const title = anchor.replace('#', '');

  const scrollTo = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (snapRef.current && section.current) {
        setIsScroll(false);
        const scroller = isSnap ? snapRef.current : window;
        tween.current = gsap.to(scroller, {
          duration: 0.5,
          scrollTo: section.current,
          overwrite: 'auto',
        });
      }
    },
    [isSnap, section, setIsScroll, snapRef],
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
      inViewRef(null);
      tween.current?.kill();
    };
  }, [inViewRef, setIsScroll, snapRef]);

  const viewUpdate = useCallback(() => {
    inViewRef(section.current);
  }, [inViewRef, section]);

  useEffect(wheelUpdate, [wheelUpdate]);
  useEffect(viewUpdate, [viewUpdate]);
  return (
    <Bar href={anchor} title={title} active={inView} onClick={scrollTo}>
      <span>
        <span>{anchor}</span>
      </span>
    </Bar>
  );
};
