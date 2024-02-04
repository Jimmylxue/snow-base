import React from 'react';
import useTimeout from '..';

export default () => {
  const { time, isFinish, refresh } = useTimeout({
    timeout: 3,
    onStart: () => {
      console.log('开始倒计时');
    },
    onTimeStep: (time) => {
      console.log('进行中', time);
    },
    onTimeEnd: () => {
      console.log('倒计时结束');
    },
  });

  return (
    <div>
      <p>是否已结束：{isFinish ? '结束' : '进行中'}</p>
      <p>当前倒计时：{time}</p>
      <button
        onClick={() => {
          refresh();
        }}
      >
        重新计算
      </button>
    </div>
  );
};
