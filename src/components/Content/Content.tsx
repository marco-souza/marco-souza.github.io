import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Breadcrumb, Content, Container } from '@core/styled';

interface LayoutContentProps {
  children: JSX.Element;
}

export default function LayoutContent({
  children,
}: LayoutContentProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Content data-testid="content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link href="/">
              <a href="/">home</a>
            </Link>
          </Breadcrumb.Item>
          {router.pathname
            .split('/')
            .filter((x) => x)
            .map((pathItem) => (
              <Breadcrumb.Item key={pathItem}>
                <Link href={`/${pathItem}`}>
                  <a href={`/${pathItem}`}>{pathItem}</a>
                </Link>
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>

        <Container>{children}</Container>
      </Content>
    </>
  );
}
