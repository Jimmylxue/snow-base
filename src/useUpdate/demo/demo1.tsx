import React from 'react';
import useUpdate from '..';

export default () => {
  const { update } = useUpdate();
  const random = Math.floor(Math.random() * 1000);

  return (
    <div>
      <button onClick={() => update()}>强制更新组件</button>
      <div>当前随机值：{random}</div>
    </div>
  );
};
