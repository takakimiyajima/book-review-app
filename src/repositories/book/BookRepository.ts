import { httpClient } from '@/repositories/httpClient'
import type { Response, Params, BookItem } from '@/repositories/book'

export class BookRepository {
  static get = async (params: Params): Promise<Response> => {
    const { data } = await httpClient.get<Response>(
      '/',
      { params }
    )

    return data
  }

  static find = async(id: string): Promise<BookItem> => {
    const { data } = await httpClient.get<BookItem>(`/${id}`)

    return data
  }
}