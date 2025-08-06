/**
 * 获取一个随机数 默认0-100
 * @param max 最大
 * @param min 最小
 * @returns 
 */
export const random = (max: number = 100, min: number = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}