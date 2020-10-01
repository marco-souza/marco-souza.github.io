import { Row, Col } from 'antd';
import Link from 'next/link';
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
            <Link href="/projects">
              <Button>Projects</Button>
            </Link>
          </Col>
          <Col span={12} md={8}>
            <Link href="/recipes">
              <Button>Recipes</Button>
            </Link>
          </Col>
          <Col span={24} md={8}>
            <Link href="/resume">
              <Button>Resume</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </HomeSection>
  );
}
