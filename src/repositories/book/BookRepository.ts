import { httpClient } from '@/repositories/httpClient'
import type { Response, Params, BookItem } from '@/repositories/book'

export class BookRepository {
  static get = async (params: Params): Promise<Response | undefined> => {
    try {
      const { data } = await httpClient.get<Response>(
        '/',
        { params }
      )

      return data
    } catch (error) {
      console.error(error)
    }
  }

  static find = async(id: string): Promise<BookItem | undefined> => {
    try {
      const { data } = await httpClient.get<BookItem>(`/${id}`)

      return data
    } catch (error) {
      console.error(error)
    }
  }
}