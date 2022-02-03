import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useRef,
} from 'react';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { Images } from '../constants/Images';

gsap.registerPlugin(ScrollToPlugin);

const Container = styled.div`
  display: grid;
  background: #2e3235;
  padding: 0 20px;
  scroll-snap-stop: always;
  scroll-snap-align: end;
`;

const Content = styled.div`
  display: grid;
  padding: 80px 0 80px;
  width: 100%;
  justify-self: center;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  text-align: center;
  gap: 60px;
  @media (min-width: 768px) {
    grid-auto-flow: column;
    justify-items: flex-start;
    text-align: left;
    gap: 0;
  }
`;

const CopyRight = styled.div`
  color: #939fa9;
  font-family: 'Lato';
  margin-top: 40px;
  border-top: 1px solid #535557;
  padding: 40px 0 0;
`;

const FooterIcon = styled.img`
  display: block;
  width: 134px;
  height: 47px;
`;

const LinkSet = styled.div`
  display: inline-grid;
  align-content: flex-start;
  gap: 20px;
`;

const SocialLink = styled.a`
  display: inline-grid;
  grid-template-columns: 50px 1fr;
  color: #939fa9;
  font-family: 'Lato';
  text-decoration: none;
  align-items: center;
  @media (hover: hover) {
    &:hover {
      color: #c3d3e0;
    }
  }
`;

const ExtraLink = styled.a`
  color: #939fa9;
  font-family: 'Lato';
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      color: #c3d3e0;
    }
  }
`;

const InternalLink = styled(Link)`
  color: #939fa9;
  font-family: 'Lato';
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      color: #c3d3e0;
    }
  }
`;

const TopLinkSet = styled.div``;

const TopLink = styled.a`
  display: inline-block;
`;

const LinkImage = styled.img`
  width: 30px;
`;

type FooterProps = {
  setIsScroll?: Dispatch<SetStateAction<boolean>>;
};

export const Footer = ({ setIsScroll }: FooterProps) => {
  const tween = useRef<gsap.core.Tween | null>(null);
  const isSnap = useMedia('(min-width: 768px) and (min-height: 800px)');
  const onClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const snap = document.getElementById('snap');
      const home = document.getElementById('home');
      if (snap && home) {
        if (setIsScroll) setIsScroll(false);
        const scroller = isSnap ? snap : window;
        tween.current = gsap.to(scroller, {
          duration: 0.5,
          scrollTo: home,
          overwrite: 'auto',
        });
      } else {
        tween.current = gsap.to(window, {
          duration: 0.5,
          scrollTo: 0,
          overwrite: 'auto',
        });
      }
    },
    [isSnap, setIsScroll],
  );
  return (
    <Container>
      <Content>
        <Grid>
          <TopLinkSet>
            <TopLink href="#" onClick={onClick} title="To the top">
              <FooterIcon src={Images.MuskNavIconGray} alt="To the top" />
            </TopLink>
          </TopLinkSet>
          <LinkSet>
            <SocialLink
              href="https://twitter.com/Muskgold"
              title="Musk Gold Twitter"
            >
              <LinkImage src={Images.SocialTwitter} alt="Musk Gold Twitter" />
              Twitter
            </SocialLink>
            <SocialLink href="https://t.me/muskgold" title="Musk Gold Telegram">
              <LinkImage src={Images.SocialTelegram} alt="Musk Gold Telegram" />
              Telegram
            </SocialLink>
            <SocialLink
              href="https://www.reddit.com/r/Muskgold/"
              title="Musk Gold Reddit"
            >
              <LinkImage src={Images.SocialReddit} alt="Musk Gold Reddit" />
              Reddit
            </SocialLink>
            <SocialLink
              href="https://discord.gg/UhvXyMQPmK"
              title="Musk Gold Discord"
            >
              <LinkImage src={Images.SocialDiscord} alt="Musk Gold Discord" />
              Discord
            </SocialLink>
            <SocialLink
              href="https://github.com/MuskGold"
              title="Musk Gold Github"
            >
              <LinkImage src={Images.SocialGithub} alt="Musk Gold Github" />
              Github
            </SocialLink>
          </LinkSet>
          <LinkSet>
            <ExtraLink href="https://rush.musk.gold">
              Gold Rush Rewards
            </ExtraLink>
            <ExtraLink href="https://shop.musk.gold">Shop</ExtraLink>
            <ExtraLink href="https://www.instagram.com/muskgoldcrypto/">
              Instagram
            </ExtraLink>
            <ExtraLink href="https://www.youtube.com/channel/UC90sPv4ZqC4feTcj57A329A">
              YouTube
            </ExtraLink>
            <ExtraLink href="https://www.facebook.com/Muskgoldcrypto/">
              Facebook
            </ExtraLink>
          </LinkSet>
          <LinkSet>
            <ExtraLink href="https://github.com/MuskGold/musk-whitepaper">
              Whitepaper
            </ExtraLink>
            <ExtraLink href="https://www.coingecko.com/en/coins/musk-gold">
              CoinGecko
            </ExtraLink>
            <InternalLink to="/privacy/">Privacy Policy</InternalLink>
            <InternalLink to="/terms/">
              Terms &amp; Risk Disclosure
            </InternalLink>
            <ExtraLink href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%69%6E%66%6F%40%6D%75%73%6B%2E%67%6F%6C%64">
              Contact Us
            </ExtraLink>
          </LinkSet>
        </Grid>
        <CopyRight>
          &copy; 2022 Intergalactic Decentralized Gold Autonomous Financials,
          Inc.
        </CopyRight>
      </Content>
    </Container>
  );
};
