/**
 * Response of Google Books API
 */
 export type Response {
  items: BookItem[];
  kind: string;
  totalItems: number;
}

/**
 * 本の情報
 */
 export type BookItem {
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
export type Params {
  q: string;
  startIndex?: number;
}

export interface IBookRepository {
  get(params: Params): Promise<Response>;
  find(id: string): Promise<BookItem>;
}
