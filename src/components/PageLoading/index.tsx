import React from 'react';
import styles from './index.less';

const Index: React.FC = () => {
  return (
    <div className={styles.shade}>
      <div>
        <span className={styles.dotload1} />
        <span className={styles.dotload2} />
        <span className={styles.dotload3} />
      </div>
    </div>
  );
};
export default Index;
