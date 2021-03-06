import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const CountPrompt = styled.p`
  color: blue;
`;

console.log(process.env.GATSBY_API_URL);

const Home: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <CountPrompt>Count: {count}</CountPrompt>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </Layout>
  );
};

export default Home;
