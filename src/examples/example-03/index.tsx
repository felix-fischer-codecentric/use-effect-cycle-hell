import React from 'react'
import { useEffectCycleHellHook } from "./useEffectCycleHellHook";

export const ComponentWithComplexState = () => {
    // Hint: To solve this, you need to look into the useEffectCycleHellHook
    const { state } = useEffectCycleHellHook()
    const { counter, facts, loading } = state

    return (
        <>
            <p>{`The component is ${loading ? '' : 'NOT '}loading.`}</p>
            <p>{`We have ${counter} facts.`}</p>
            {facts.map((fact) => (
                <p key={fact}>{fact}</p>
            ))}
        </>
    )
}