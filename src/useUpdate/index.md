---
nav:
  path: /hook
---

# useUpdate

强制刷新组件的 hook

## 代码展示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
const { update } = useMount();
```

### Result

| 参数   | 说明                   | 类型       | 默认值 |
| ------ | ---------------------- | ---------- | ------ |
| update | 强制重新刷新组件的函数 | `()=>void` | -      |
