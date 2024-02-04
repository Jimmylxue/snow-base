---
nav:
  path: /hook
---

# useBoolean

切换 布尔值 的 hook

## 代码展示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
const { state, toggle, set } = useBoolean(true);
```

### Params

| 参数         | 说明           | 类型      | 默认值  |
| ------------ | -------------- | --------- | ------- |
| defaultValue | 布尔值的默认值 | `boolean` | `false` |

### Result

| 参数   | 说明               | 类型                  | 默认值  |
| ------ | ------------------ | --------------------- | ------- |
| state  | 当前的值           | `boolean`             | `false` |
| toggle | 切换下一个状态方法 | `()=>void`            | -       |
| set    | 设置指定的值的方法 | `(val:boolean)=>void` | -       |
