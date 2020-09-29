import React from 'react';

import { Breadcrumb, Content, Container } from '@core/styled';

interface LayoutContentProps {
  children: JSX.Element;
}

export default function LayoutContent({
  children,
}: LayoutContentProps): JSX.Element {
  return (
    <>
      <Content data-testid="content">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Container>{children}</Container>
      </Content>
    </>
  );
}
