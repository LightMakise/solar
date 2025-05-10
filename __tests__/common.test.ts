import { describe, test, expect } from 'vitest'
import { isEmpty, stat } from '../dist/solar.esm'

describe('common测试', () => {
    test('isEmpty 测试', () => {

        // expect().toBe(true)
        expect(isEmpty(1234)).toBe(false)
        expect(isEmpty(undefined)).toBe(true)
        expect(isEmpty(0)).toBe(true)
        expect(isEmpty('')).toBe(true)
        expect(isEmpty([])).toBe(true)
        expect(isEmpty({})).toBe(true)
        expect(isEmpty(new Map())).toBe(true)
        expect(isEmpty(new WeakMap())).toBe(false)
        expect(isEmpty(new Set())).toBe(true)
        expect(isEmpty(new WeakSet())).toBe(false)
        expect(isEmpty(() => { })).toBe(true)
    })
})