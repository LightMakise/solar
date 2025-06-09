//#region packages/common/common.d.ts
/**
 * 是否为空
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isEmpty(v: any): boolean;
/**
 * 是否为字符串
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isString(v: any): boolean;
/**
 * 是否为数字
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isNumber(v: any): boolean;
/**
 * 是否为Boolean
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isBoolean(v: any): boolean;
/**
 * 是否为undefined
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isUndefined(v: any): boolean;
/**
 * 是否为null
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isNull(v: any): boolean;
/**
 * 是否为Object
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isObject(v: any): boolean;
/**
 * 是否为Object
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isArray(v: any): boolean;
/**
 * 是否为Map
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isMap(v: any): boolean;
/**
 * 是否为WeakMap
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isWeakMap(v: any): boolean;
/**
 * 是否为Set
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isSet(v: any): boolean;
/**
 * 是否为WeakSet
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isWeakSet(v: any): boolean;
/**
 * 是否为Symbol
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isSymbol(v: any): boolean;
/**
 * 是否为Function
 * @param v - 待检测值
 * @returns Boolean
 */
declare function isFunction(v: any): boolean;
//#endregion
//#region packages/function/stat.d.ts
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
declare function stat(fn: Function, tag?: string): (this: any, ...args: any[]) => any;
//#endregion
export { isArray, isBoolean, isEmpty, isFunction, isMap, isNull, isNumber, isObject, isSet, isString, isSymbol, isUndefined, isWeakMap, isWeakSet, stat };
//# sourceMappingURL=index.d.ts.map