import React from 'react'
import { useEffect, useState } from "react";
import { loadUserInfo } from "./loadUserInfo";

type ComplexState = {
    isLoading: boolean
    userInfo: { id: string, name?: string }
}

export const ComponentWithComplexState = ({ userId }: { userId: string }) => {
    const [complexState, setComplexState] = useState<ComplexState>({ isLoading: true, userInfo: { id: userId } })
    const [renderCounter, setRenderCounter] = useState(0)

    useEffect(() => {
        loadUserInfo(complexState.userInfo.id).then(info => {
            setComplexState({ isLoading: false, userInfo: info })
            setRenderCounter(prevState => prevState + 1)
        })
    }, [complexState])

    if (complexState.isLoading) {
        return <span>Loading...</span>
    }

    return <span>{`Hello ${complexState.userInfo.name}! We rendered this ${renderCounter} times!`}</span>
}