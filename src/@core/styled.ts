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
  /* TODO: Move 'color' definition[L47] to layout content */
`;

export const HeaderContainer = styled(Layout.Header)`
  background: ${themes[AvailableThemes.dark].black};
  box-shadow: 0px 5px 15px ${themes[AvailableThemes.dark].black};
  padding: 0 30px;

  div {
    color: ${themes[AvailableThemes.dark].white};
    box-sizing: border-box;
    float: left;
    font-weight: bold;
  }

  .right {
    float: right;
    font-size: 0.8rem;
  }
`;

export const HomeSection = styled.div`
  height: 100vh;
  background: ${themes[AvailableThemes.dark].black};
  padding: 3rem;

  #header {
    padding: 6rem 0;
    text-align: center;
  }

  > div {
    margin: 0 auto;
    max-width: 960px;
  }

  * {
    color: ${themes[AvailableThemes.dark].gray};
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

  &:hover,
  &:focus {
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
  margin: ${(props) => (props.className === 'header' ? 1 : 4)}rem 0;
  text-align: center;

  span {
    display: inline;
  }
`;
