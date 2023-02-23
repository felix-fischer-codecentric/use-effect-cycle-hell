import { useEffect } from "react";
import { useInitializerHook } from "./useInitializerHook";

export const useEffectCycleHellHook = () => {
    const complexState = useInitializerHook()

    useEffect(() => {
        complexState.startLoading()
    }, [])

    return {
        state: complexState.state
    }
}