import React from 'react'
import {useEffect, useState} from "react";
import {loadProducts, Product} from "./loadProducts";

type ComplexState = {
    loading: boolean
    products: Product[]
    page: number
}

export const ComponentWithComplexState = () => {
    const [complexState, setComplexState] = useState<ComplexState>({loading: false, products: [], page: 0})

    useEffect(() => {
        setComplexState({...complexState, loading: true})
        loadProducts(complexState.page).then(data => {
            setComplexState({
                loading: false,
                page: complexState.page + 1,
                products: [...complexState.products, ...data.products]
            })
        })
    }, [complexState])

    return <span>{`We have loaded ${complexState.products.length} products!${complexState.loading ? ' Currently loading more...' : ''}`}</span>
}