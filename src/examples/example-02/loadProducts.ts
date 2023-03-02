export type Product = {
    id: string
    name: string
    price: string
}

const exampleProduct: Product = {
    id: '123',
    name: 'product',
    price: '100,00€'
}

export const loadProducts = (_page: number): Promise<{ products: Product[] }> =>
    new Promise<{ products: Product[] }>((resolve) => resolve({
        products: [
            exampleProduct, exampleProduct, exampleProduct, exampleProduct, exampleProduct
        ]
    }))
