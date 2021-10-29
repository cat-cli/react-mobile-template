import React from 'react';
import styles from './index.less';

const Index: React.FC = () => {
  return (
    <div className={styles.serverErr}>
      <img src="/img/404.png" />
      <p>页面找不到了</p>
    </div>
  );
};

export default Index;
