import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const CountPrompt = styled.p`
  color: blue;
`;

const Button = styled.button`
  color: red;
`;

const Home: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Layout>
      <SEO title={'Home'} />
      <div>
        <CountPrompt>Count: {count}</CountPrompt>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </Layout>
  );
};

export default Home;
