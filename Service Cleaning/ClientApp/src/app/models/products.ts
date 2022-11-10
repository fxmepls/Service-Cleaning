export interface IProducts {
    id: number,
    title: string,
    price: number,
    image?: string,
    configure: IProductsConfig,
    quantity: number
}

export interface IProductsConfig {
    type: string,
    people: number,
    time: string
}

