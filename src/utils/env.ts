/**
 * 判断运行环境是否是 DEV 换行
 */
export const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
