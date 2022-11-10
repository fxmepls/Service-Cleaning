export interface IProducts {
    id: number,
    title: string,
    price: number,
    image?: string,
    configure: IProductsConfig
}

export interface IProductsConfig {
    type: string,
    people: number,
    time: string
}

