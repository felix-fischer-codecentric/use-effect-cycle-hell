import { useEffect } from "react";
import { useInitializerHook } from "./useInitializerHook";

export const useEffectCycleHellHook = () => {
    const complexState = useInitializerHook()

    useEffect(() => {
        complexState.startLoading()
    }, [complexState])

    return {
        state: complexState.state
    }
}