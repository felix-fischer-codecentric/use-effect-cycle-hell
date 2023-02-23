import {useState} from "react";

type ComplexState = {
    counter: number
    facts: string[]
    loading: boolean
}

export const useInitializerHook = () => {
    const [complexState, setComplexState] = useState<ComplexState>({ counter: 0, facts: [], loading: false })

    const startLoading = () => {
        setComplexState((prev) => ({ ...prev, counter: prev.counter + 1, loading: true }))
    }

    return { state: complexState, startLoading }
}