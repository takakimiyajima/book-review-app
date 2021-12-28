import axios from '@/repositories/httpClient'

/**
 * Response of Google Books API
 */
 export type Response = {
  items: BookItem[];
  kind: string;
  totalItems: number;
}

/**
 * 本の情報
 */
 export type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    publisher?: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
    previewLink?: string;
  };
  saleInfo?: {
    listPrice: {
      amount: number;
    };
  };
}

/**
 * query parameters
 */
export type Params = {
  q: string;
  startIndex?: number;
}

export class BookRepository {
  async get(params: Params) {
    const { data } = await axios.get<Response>('/', { params })
    return data
  }

  async find(id: string) {
    const { data } = await axios.get<BookItem>(`/${id}`)
    return data
  }
}