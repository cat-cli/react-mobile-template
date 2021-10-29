import Header from '@/components/Header';
import React from 'react';

const IndexLayout: React.FC = (Props) => {
  const { children } = Props;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default IndexLayout;
