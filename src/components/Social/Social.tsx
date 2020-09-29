import React from 'react';

import { DevIcons, SocialContainer } from 'components/@core/styled';

const socialNetworks = [
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/masouzajunior' },
  { icon: 'github', href: 'https://github.com/marco-souza' },
  {
    icon: 'stackoverflow',
    href: 'https://stackoverflow.com/users/7988674/marco-ant%c3%b4nio',
  },
];

export default function Home(): JSX.Element {
  return (
    <SocialContainer>
      {socialNetworks.map(({ icon, href }) => (
        <a key={icon} href={href} target="blank">
          <DevIcons icon={icon} viewBox="0 0 32 32" />
        </a>
      ))}
    </SocialContainer>
  );
}
