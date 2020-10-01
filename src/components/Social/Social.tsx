import React from 'react';

import { pageInfo } from '@core/configs';
import { DevIcons, SocialContainer } from '@core/styled';

interface Props {
  header?: boolean;
}

const defaultProps: Props = {
  header: false,
};

export default function Social({ header }: Props): JSX.Element {
  const socialClassName = header ? 'header' : '';
  return (
    <SocialContainer className={socialClassName}>
      {pageInfo.socialNetworks.map(({ icon, href }) => (
        <a key={icon} href={href} target="blank">
          <DevIcons data-testid="icon" icon={icon} viewBox="0 0 32 32" />
        </a>
      ))}
    </SocialContainer>
  );
}

Social.defaultProps = defaultProps;
