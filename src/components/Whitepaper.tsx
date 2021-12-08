import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { Images } from '../constants/Images';

const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  background: #96060d;
  @media (min-width: 768px) {
    min-height: 700px;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LeftBlock = styled.div`
  display: grid;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 15%;
  min-height: 100px;
  width: 70%;
  background: #de000f;
  @media (min-width: 768px) {
    height: 20%;
  }
  @media (min-width: 1280px) {
    height: 25%;
  }
`;

const LeftText = styled.div`
  display: grid;
  align-self: center;
  padding-left: 15%;
  font-size: 24px;
  color: #fff;
  font-family: 'Lato';
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;

const RightBlock = styled.div`
  display: grid;
  position: absolute;
  align-content: center;
  justify-content: center;
  bottom: 0;
  left: 70%;
  height: 15%;
  min-height: 100px;
  background: #fff;
  width: 25%;
  @media (min-width: 768px) {
    height: 20%;
  }
  @media (min-width: 1280px) {
    height: 25%;
    width: 20%;
  }
`;

const RightContent = styled.div`
  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const DownloadArrow = styled.a`
  position: relative;
  display: block;
  margin-bottom: 5px;
  width: 20px;
  height: 30px;
  transform: scale(0.7);
  @media (min-width: 768px) {
    margin-bottom: 15px;
    transform: scale(1);
  }
`;

const Bar = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 4px;
  height: 20px;
  background: #e20900;
`;

const Chevron = styled.span`
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 20px;
  height: 10px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 50%;
    width: 50%;
    background: #e20900;
  }
  &:before {
    left: 0;
    transform: skewY(45deg);
  }
  &:after {
    right: 0;
    width: 50%;
    transform: skewY(-45deg);
  }
`;

const RightText = styled.a`
  font-family: 'Lato';
  color: #e20900;
  font-size: 13px;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Line1 = styled.div`
  position: absolute;
  left: 7%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #fff;
  opacity: 0.3;
`;

const Line2 = styled.div`
  position: absolute;
  left: 43%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #fff;
  opacity: 0.3;
`;

export const Whitepaper = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [posterUrl, setPosterUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const isDesktop = useMedia('(min-width: 768px)');
  const videos = {
    desktop: 'https://vids.musk.gold/white-paper-bg.mp4',
    mobile: 'https://vids.musk.gold/white-paper-bg-mob.mp4',
  };
  const posters = {
    desktop: Images.WhitePaperBgPoster,
    mobile: Images.WhitePaperBgPosterMob,
  };
  const update = useCallback(() => {
    const newPosterUrl = isDesktop ? posters.desktop : posters.mobile;
    const newVideoUrl = isDesktop ? videos.desktop : videos.mobile;
    setPosterUrl(newPosterUrl);
    setVideoUrl(newVideoUrl);
  }, [
    isDesktop,
    posters.desktop,
    posters.mobile,
    videos.desktop,
    videos.mobile,
  ]);
  useEffect(update, [update]);
  return (
    <Container ref={ref}>
      {inView && (
        <Video
          poster={posterUrl}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      <Line1 />
      <Line2 />
      <LeftBlock>
        <LeftText>White Paper</LeftText>
      </LeftBlock>
      <RightBlock>
        <RightContent>
          <DownloadArrow href="https://github.com/MuskGold/musk-whitepaper">
            <Bar />
            <Chevron />
          </DownloadArrow>
          <RightText href="https://github.com/MuskGold/musk-whitepaper">
            Download White Paper PDF.
          </RightText>
        </RightContent>
      </RightBlock>
    </Container>
  );
};
