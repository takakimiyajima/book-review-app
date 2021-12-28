<script lang="ts">
  import SearchBar from '@/components/SearchBar.svelte'

  /** State */
  let q = 'JavaScript'

  const handleSubmit = () => {
    console.log('handleSubmit')
    console.log(q)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <SearchBar bind:value={q} />
</form>
<div class="mt-4 text-center">{ q }</div>
