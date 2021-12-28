import { BookItem, IBookRepository, Params, Response } from './types'
import { httpClient } from '@/repositories/httpClient'

export class BookRepository implements IBookRepository {
  async get(params: Params) {
    const { data } = await httpClient.get<Response>('/', { params })
    return data
  }

  async find(id: string) {
    const { data } = await httpClient.get<BookItem>(`/${id}`)
    return data
  }
}