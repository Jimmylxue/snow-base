import React from 'react';
import useBoolean from '..';

export default () => {
  const { state, toggle, set } = useBoolean(true);
  return (
    <div>
      <div>当前布尔值：{JSON.stringify(state)}</div>
      <button onClick={toggle}>切换下一状态</button>
      <button onClick={() => set(true)}>设为true</button>
    </div>
  );
};
