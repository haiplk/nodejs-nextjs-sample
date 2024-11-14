export interface BookRequest {
    title?: string;
    author?: string;
}


export interface BookResponse {
    id: string
    title: string | null
    author: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    updatedBy: string | null
}
