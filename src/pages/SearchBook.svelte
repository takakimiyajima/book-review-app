<script lang="ts">
  import InfiniteScroll from 'svelte-infinite-scroll'
  import { books } from '@/store/book'
  import SearchBar from '@/components/SearchBar.svelte'
  import Spinner from '@/components/Spinner.svelte'
  import BookCard from '@/components/BookCard.svelte'
  import { BookRepository } from '@/repositories/book'

  /** States */
  let q = 'Java'
  let isEmpty = false
  let startIndex = 0
  let totalItems = 0
  let promise: Promise<void>

  $: hasMore = totalItems > $books.length

  /** Methods */
  const handleSubmit = () => {
    if (!q.trim()) return
    promise = getBooks()
  }

  const handleLoadMore = () => {
    startIndex += 10
    promise = getNextPage()
  }

  const getBooks = async () => {
    books.reset()
    isEmpty = false
    startIndex = 0
    const result = await BookRepository.get({ q })
    isEmpty = result.totalItems === 0
    totalItems = result.totalItems
    books.add(result.items)
  }

  const getNextPage = async () => {
    const result = await BookRepository.get({ q, startIndex })
    // It's filtered by id coz the acquired data may include data that already exists
    const bookIds = $books.map(book => book.id)
    const filteredItems = result.items.filter(item => {
      return !bookIds.includes(item.id)
    })
    books.add(filteredItems)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <SearchBar bind:value={q} />
</form>
<div class="mt-4 text-center">
  {#if isEmpty}
    <div>No results found.</div>
  {:else}
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {#each $books as book (book.id)}
        <BookCard {book} />
      {/each}
    </div>
    <InfiniteScroll
      threshold={100}
      elementScroll={null}
      window
      {hasMore}
      horizontal={false}
      reverse={false}
      on:loadMore={handleLoadMore}
    />
  {/if}

  {#await promise}
    <div class="flex justify-center">
      <Spinner />
    </div>
    {:catch e}
      <span class="text-red-600 text-sm">
        {e.message}
      </span>
  {/await}
</div>
