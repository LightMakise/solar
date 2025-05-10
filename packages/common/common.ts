
/**
 * 是否为空
 * @param v - 待检测值
 * @returns Boolean
 */
export function isEmpty(v: any): boolean {
  if (isString(v)) {
    return v === ''
  }
  if (isNumber(v)) {
    return v === 0
  }
  if (isUndefined(v) || isNull(v)) {
    return true
  }
  if (isBoolean(v) || isSymbol(v)) {
    return false
  }
  if (isArray(v)) {
    return v.length === 0
  }
  if (isObject(v)) {
    return Object.keys(v).length === 0
  }
  if (isMap(v) || isSet(v)) {
    return v.size === 0
  }
  if (isFunction(v)) {
    return true
  }
  // isWeakMap(v) || isWeakSet(v)
  return false
}
/**
 * 是否为字符串
 * @param v - 待检测值
 * @returns Boolean
 */
export function isString(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object String]';
}
/**
 * 是否为数字
 * @param v - 待检测值
 * @returns Boolean
 */
export function isNumber(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Number]';
}
/**
 * 是否为Boolean
 * @param v - 待检测值
 * @returns Boolean
 */
export function isBoolean(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Boolean]';
}
/**
 * 是否为undefined
 * @param v - 待检测值
 * @returns Boolean
 */
export function isUndefined(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Undefined]';
}
/**
 * 是否为null
 * @param v - 待检测值
 * @returns Boolean
 */
export function isNull(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Null]';
}
/**
 * 是否为Object
 * @param v - 待检测值
 * @returns Boolean
 */
export function isObject(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Object]';
}
/**
 * 是否为Object
 * @param v - 待检测值
 * @returns Boolean
 */
export function isArray(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Array]';
}
/**
 * 是否为Map
 * @param v - 待检测值
 * @returns Boolean
 */
export function isMap(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Map]';
}
/**
 * 是否为WeakMap
 * @param v - 待检测值
 * @returns Boolean
 */
export function isWeakMap(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object WeakMap]';
}
/**
 * 是否为Set
 * @param v - 待检测值
 * @returns Boolean
 */
export function isSet(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Set]';
}
/**
 * 是否为WeakSet
 * @param v - 待检测值
 * @returns Boolean
 */
export function isWeakSet(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object WeakSet]';
}
/**
 * 是否为Symbol
 * @param v - 待检测值
 * @returns Boolean
 */
export function isSymbol(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Symbol]';
}
/**
 * 是否为Function
 * @param v - 待检测值
 * @returns Boolean
 */
export function isFunction(v: any): boolean {
  return Object.prototype.toString.call(v) === '[object Function]';
}