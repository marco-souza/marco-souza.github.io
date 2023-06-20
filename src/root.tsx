// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { config } from "virtual:config";
import { Layout } from "~/components/Layout";
import "~/root.css";

const { site } = config;

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <Title>{site.title}</Title>
        <Meta name="description" content={site.description} />

        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Layout>

      <Scripts />
    </Html>
  );
}
