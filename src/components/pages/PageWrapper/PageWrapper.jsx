import React from 'react';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default PageWrapper;
