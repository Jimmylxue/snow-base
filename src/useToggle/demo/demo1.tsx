import React from 'react';
import useToggle from '..';

export default () => {
  const { state, toggle, set } = useToggle({
    stateRange: ['红灯', '黄灯', '绿灯'],
  });
  return (
    <div>
      <div>当前红绿灯：{state}</div>
      <button onClick={toggle}>切换下一灯</button>
      <button onClick={() => set('绿灯')}>设为绿灯</button>
    </div>
  );
};
