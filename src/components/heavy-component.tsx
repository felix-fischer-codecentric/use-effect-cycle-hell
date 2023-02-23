import React from 'react'
import { useEffectCycleHellHook } from "../hooks/useEffectCycleHellHook";

export const HeavyComponent = () => {
    const { state } = useEffectCycleHellHook()
    const { counter, facts, loading } = state

    return (
        <>
            <p>{`The component is ${loading ? '' : 'NOT '}loading.`}</p>
            <p>{`We have ${counter} facts.`}</p>
            {facts.map((fact, index) => (
                <p key={index}>{fact}</p>
            ))}
        </>
    )
}