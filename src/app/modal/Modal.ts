export interface User {
    id: number,
    username: string,
    password: string,
    admin: boolean
}

export interface Category {
    id: number,
    name: string,
    expanded: boolean
}

export interface Book {
    id: number;
    name: string,
    description: string,
    photo: string,
    writer: string,
    price: number,
    size: number,
    page: number,
    publisher: string,
    publishDate: any
}