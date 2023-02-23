/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react'
import { useInitializerHook } from "./useInitializerHook";

describe('useInitializerHook', () => {
    it('returns startLoading func', () => {
        const data = renderHook(useInitializerHook)
        expect(data.result.current.startLoading).toBeDefined()
    })
})
