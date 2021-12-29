import { BookRepository, IBookRepository } from "@/repositories/book"

export const BOOK = Symbol('book')

export interface Repositories {
  [BOOK]: IBookRepository;
}

export default {
  [BOOK]: new BookRepository()
} as Repositories
