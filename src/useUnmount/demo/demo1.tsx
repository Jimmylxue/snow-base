import React, { useState } from 'react';
import useUnmount from '..';

const Child = () => {
  useUnmount(() => {
    alert('子组件卸载了');
  });

  return <div>child</div>;
};

export default () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow((state) => !state);
        }}
      >
        {show ? '卸载子组件' : '挂在子组件'}
      </button>
      {show && <Child />}
    </div>
  );
};
