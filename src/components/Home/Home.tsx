import { Row, Col } from 'antd';
import React from 'react';

import { pageInfo } from '@core/configs';
import { HomeSection, Button } from '@core/styled';
import Social from 'components/Social';

export default function Home(): JSX.Element {
  const { title, subtitle } = pageInfo.home;
  return (
    <HomeSection data-testid="home">
      <div>
        <div id="header" data-testid="header">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

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
