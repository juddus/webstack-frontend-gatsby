import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

type SchemaGetTitle = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Header: React.FC = () => {
  const queryGetTitle = useStaticQuery<SchemaGetTitle>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <header>
      <h1>{queryGetTitle.site.siteMetadata.title}</h1>
    </header>
  );
};

export default Header;
