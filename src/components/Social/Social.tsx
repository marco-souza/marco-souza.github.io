import React from 'react';

import { pageInfo } from '@core/configs';
import { DevIcons, SocialContainer } from '@core/styled';

export default function Social(): JSX.Element {
  return (
    <SocialContainer>
      {pageInfo.socialNetworks.map(({ icon, href }) => (
        <a key={icon} href={href} target="blank">
          <DevIcons data-testid="icon" icon={icon} viewBox="0 0 32 32" />
        </a>
      ))}
    </SocialContainer>
  );
}
