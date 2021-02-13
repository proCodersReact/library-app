export interface IAuthor{
    name:string
}

export interface IBook {
    name: string | null,
    isbn: string | null,
    author: IAuthor,
}