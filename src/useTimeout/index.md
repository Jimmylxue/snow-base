---
nav:
  path: /hook
---

# useTimeout

用于倒计时的 hook

## 代码展示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
const { time, isFinish, refresh } = useTimeout({
  timeout: 3,
  enable,
  onStart: () => {
    console.log('开始倒计时');
  },
  onTimeStep: () => {
    console.log('进行中');
  },
  onTimeEnd: () => {
    console.log('倒计时结束');
  },
});
```

### Params

| 参数    | 说明                     | 类型     | 默认值 |
| ------- | ------------------------ | -------- | ------ |
| options | 可选项，传入倒计时配置项 | `Option` | -      |

### Options

| 参数       | 说明                 | 类型                       | 默认值 |
| ---------- | -------------------- | -------------------------- | ------ |
| enable     | 倒计时是否开始       | `boolean` \| `()=>boolean` | `true` |
| timeout    | 倒计时时长           | `number`                   | -      |
| onStart    | 倒计时开始时回调     | `()=>boolean`              | -      |
| onTimeStep | 倒计时每次变动时回调 | `(time:number)=>boolean`   | -      |
| onTimeEnd  | 倒计时结束时回调     | `()=>boolean`              | -      |

### Result

| 参数     | 说明             | 类型       | 默认值  |
| -------- | ---------------- | ---------- | ------- |
| time     | 当前倒计时       | `number`   | -       |
| isFinish | 倒计时是否结束   | `boolean`  | `false` |
| refresh  | 重新倒计时的函数 | `()=>void` | -       |
