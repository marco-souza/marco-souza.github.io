import { Row, Col } from 'antd';
import React from 'react';

import { HomeSection, Button } from '@core/styled';
import Social from 'components/Social';

export default function Home(): JSX.Element {
  const title = `Hi, I'm a Code Craftsman.`;
  return (
    <HomeSection data-testid="home">
      <div>
        <h1 data-testid="title">{title}</h1>

        <Social />

        <Row gutter={16}>
          <Col span={12} md={8}>
            <Button>Projects</Button>
          </Col>
          <Col span={12} md={8}>
            <Button>Recipes</Button>
          </Col>
          <Col span={24} md={8}>
            <Button>Resume</Button>
          </Col>
        </Row>
      </div>
    </HomeSection>
  );
}
