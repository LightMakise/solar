import { isFunction } from '../index';
/**
 * 包装一个函数，并统计其执行时间。
 * 
 * @param fn - 需要被包装的函数，必须是一个有效的函数。
 * @param tag - 可选的标签，用于在日志中标识该函数。如果未提供，则使用函数名。
 * @returns 返回一个新的函数，该函数在执行时会记录其运行时间，并返回原函数的执行结果。
 * @example 
 * ```
 * const isEmptyStat = stat(() => isEmpty(1234), 'isEmpty')
 * isEmptyStat()
 * // log: function isEmpty () run time:0.025ms 
 * ```
 */
export function stat(fn: Function, tag: string = '') {
  if (!isFunction(fn)) {
    throw new Error('stat: fn must be a function');
  }
  return function (this: any, ...args: any[]) {
    const start = performance.now();
    const result = fn.apply(this, args);
    console.log('result', result instanceof Promise)
    if (result instanceof Promise) {
      result.then(() => {
        const end = performance.now();
        console.log(`function ${tag ? tag : fn.name} () run time:${(end - start).toFixed(3)}ms`);
      })
    } else {
      const end = performance.now();
      console.log(`function ${tag ? tag : fn.name} () run time:${(end - start).toFixed(3)}ms`);
    }
    return result;
  };
}