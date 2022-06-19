
export interface ICategory {
    createdAt: string,
    name: string,
    id: string
}

export interface IProduct {
    createdAt: number,
    name: string,
    avatar: string,
    developerEmail: string,
    price: number,
    id: number,
    description: string,
    category: string
}
