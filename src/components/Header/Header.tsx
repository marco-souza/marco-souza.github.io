import { useRouter } from 'next/router';
import React from 'react';

import { HeaderContainer } from '@core/styled';
import Social from 'components/Social';

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const routeName = router.pathname.slice(1);
  const logoText = routeName.replace(/^\w/, (chr) => chr.toUpperCase());
  return (
    <HeaderContainer>
      <div className="logo" data-testid="logo">
        {logoText}
      </div>
      <div className="right" data-testid="social">
        <Social header />
      </div>
    </HeaderContainer>
  );
}
