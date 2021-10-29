import { useSelector } from '@/hooks';
import React from 'react';
import styles from './index.less';
const Index: React.FC = () => {
  const { text } = useSelector((store) => store.home);
  return <div className={styles.wrap}>{text}</div>;
};

export default Index;
