import React from 'react';
import { NavBar } from 'antd-mobile';
import { history } from 'umi';
import styles from './index.less';

const Index: React.FC = () => {
  const goBack = () => {
    history.go(-1);
  };

  return (
    <header className={styles.wrap}>
      <NavBar onBack={goBack} />
    </header>
  );
};

export default Index;
