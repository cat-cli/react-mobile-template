import React from 'react';
import { Empty } from 'antd-mobile';

const Index: React.FC = () => {
  return (
    <div>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 400,
        }}
        description={<span style={{ fontSize: '50px', color: 'rgb(142 177 248)' }}>暂无数据</span>}
      />
    </div>
  );
};
export default Index;
