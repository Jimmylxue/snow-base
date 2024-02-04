---
nav:
  path: /hook
---

# useToggle

切换 toggle 的 hook

## 代码展示

### 基础用法

<code src="./demo/demo1.tsx"></code>

### 切换方向调整

<code src="./demo/demo2.tsx"></code>

## API

```typescript
const { state, toggle, set } = useToggle({
  stateRange: ['红灯', '黄灯', '绿灯'],
  direction: 'LEFT',
  defaultValue: '红灯',
});
```

### Params

| 参数    | 说明                       | 类型     | 默认值 |
| ------- | -------------------------- | -------- | ------ |
| options | 可选项，传入 toggle 配置项 | `Option` | -      |

### Options

| 参数         | 说明             | 类型              | 默认值 |
| ------------ | ---------------- | ----------------- | ------ |
| stateRange   | 书籍集合         | `T[]`             | -      |
| direction    | 值切换的方向     | `LEFT` \| `RIGHT` | -      |
| defaultValue | 倒计时开始时回调 | `T`               | -      |

### Result

| 参数   | 说明               | 类型            | 默认值 |
| ------ | ------------------ | --------------- | ------ |
| state  | 当前的值           | `T`             | -      |
| toggle | 切换下一个状态方法 | `()=>void`      | -      |
| set    | 设置指定的值的方法 | `(val:T)=>void` | -      |
