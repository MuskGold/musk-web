import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const langSets = {
  en: 'English',
  zh_cn: '简体中文',
  zh_tw: '繁體中文',
};

type LangSet = keyof typeof langSets;

const Container = styled.div`
  display: grid;
  padding: 0 20px;
  position: relative;
`;

const Content = styled.div`
  display: grid;
  padding: 0;
  justify-self: center;
`;

const LangList = styled.div`
  position: absolute;
  background: #2e3235;
  border: 1px solid #535557;
  bottom: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    left: auto;
    right: 0;
  }
`;

const List = styled.ul`
  display: grid;
  margin: 0;
  padding: 20px;
  gap: 20px;
`;

const Item = styled.li`
  list-style-type: none;
`;

const LangBtn = styled.button`
  color: #939fa9;
  font-family: 'Lato';
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  outline: 0;
`;

const StyledLink = styled(Link)`
  padding: 0;
  display: block;
  color: #939fa9;
  font-family: 'Lato';
  min-width: 100px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const LangSelect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const { languages, originalPath, language } = useI18next();
  const currLang = langSets[language as LangSet];
  const toggleLangSelect = useCallback(() => {
    setShow(!show);
  }, [show]);
  const onKeyClose = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShow(false);
    }
  }, []);
  const onClose = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShow(false);
    }
  }, []);
  const handleClose = useCallback(() => {
    document.addEventListener('keydown', onKeyClose);
    document.addEventListener('click', onClose, true);
    return () => {
      document.removeEventListener('keydown', onKeyClose);
      document.removeEventListener('click', onClose, true);
    };
  }, [onClose, onKeyClose]);
  useEffect(handleClose, [handleClose]);
  return (
    <Container>
      <Content>
        <LangBtn onClick={toggleLangSelect}>{currLang}</LangBtn>
        {show && (
          <LangList ref={ref}>
            <List>
              {languages.map((lang) => (
                <Item key={lang}>
                  <StyledLink to={originalPath} language={lang}>
                    {langSets[lang as LangSet]}
                  </StyledLink>
                </Item>
              ))}
            </List>
          </LangList>
        )}
      </Content>
    </Container>
  );
};
