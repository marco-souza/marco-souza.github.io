import { Layout, Breadcrumb as Bd, Button as btn } from 'antd';
import DevIcon from 'devicon-react-svg';
import styled from 'styled-components';

import { themes, AvailableThemes } from './colors';

export const Breadcrumb = styled(Bd)`
  margin: 16px 0;
`;

export const Content = styled(Layout.Content)`
  padding: 24px;
  min-height: 280px;
  padding: '0 50px';
`;

export const Container = styled.div`
  background: #fff;
  padding: 1.5rem;
  min-height: 280px;

  &,
  & iframe {
    border-radius: 3px;
  }
`;

export const LogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  padding: 0 1rem;
  color: white;
  float: left;
`;

export const HomeSection = styled.div`
  height: 100vh;
  background: ${themes[AvailableThemes.dark].black};
  color: ${themes[AvailableThemes.dark].gray};
  padding: 3rem;

  h1 {
    color: ${themes[AvailableThemes.dark].gray};
    padding: 6rem 0;
    text-align: center;
  }

  > div {
    margin: 0 auto;
    max-width: 960px;
  }
`;

export const Button = styled(btn)`
  border: 1px solid ${themes[AvailableThemes.dark].lightGray};
  color: ${themes[AvailableThemes.dark].lightGray};
  background: unset;
  text-align: center;
  margin: 0.5rem 0;
  border-radius: 5px 5px;
  width: 100%;

  &:hover {
    border: 1px solid ${themes[AvailableThemes.dark].gray};
    color: ${themes[AvailableThemes.dark].gray};
    background: unset;
  }
`;

export const DevIcons = styled(DevIcon)`
  fill: ${themes[AvailableThemes.dark].lightGray};
  width: 2rem;
  margin: 0 1rem;

  &:hover {
    fill: ${themes[AvailableThemes.dark].gray};
    width: 2rem;
  }
`;

export const SocialContainer = styled.div`
  margin-top: 4rem;
  text-align: center;

  span {
    display: inline;
  }
`;
