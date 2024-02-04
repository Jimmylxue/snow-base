---
nav:
  path: /hook
---

# useUnmount

组件卸载成功时的 hook

## 代码展示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
useUnmount(fn: () => void);
```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | 初始化时执行的函数 | `() => void` | -      |
