import { derived, writable } from 'svelte/store'
import type { BookItem } from '@/repositories/book'

const useBookStore = () => {
  const { subscribe, set, update } = writable<BookItem[]>([])

  const reset = () => set([])

  const add = (newBooks: BookItem[]) => update((books: BookItem[]) => {
    // NOTE: Must always replace the variable directly to make the array value reactive.
    return [...books, ...newBooks]
  })

  return {
    subscribe,
    reset,
    add
  }
}

export const books = useBookStore()

/** getters */
export const find = (id: string) => {
  return derived(books, $books => $books.find(book => book.id === id))
}
