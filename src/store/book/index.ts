import { writable } from 'svelte/store'
import type { BookItem } from '@/repositories/book'

const dummyBooks = [
  {
    id: '1',
    volumeInfo: {
      title: 'title1',
      description: 'lorem ipsm'
    }
  },
  {
    id: '2',
    volumeInfo: {
      title: 'title2',
      description: 'lorem ipsm'
    }
  },
  {
    id: '3',
    volumeInfo: {
      title: 'title3',
      description: 'lorem ipsm'
    }
  },
] as Array<BookItem>

export const books = writable<Array<BookItem>>(dummyBooks)
