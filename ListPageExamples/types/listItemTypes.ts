export interface Post  {
    id:string
    title: string
    scores: number
    author: Author
    commentsCount: number
    creationDate: number
    thumbnail: string
}

export interface Author  {
    name: string
    type?: 'USER'|'AUTHOR'
}