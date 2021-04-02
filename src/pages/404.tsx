import * as React from 'react';
import {PageProps} from 'gatsby';
import Layout from '../components/layout';

const Error404Page: React.FC<PageProps> = () => (
  <Layout>
    <h1>Error 404: Page not found.</h1>
  </Layout>
);

export default Error404Page;
