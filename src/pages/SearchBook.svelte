<script lang="ts">
  import SearchBar from '@/components/SearchBar.svelte'

  /** State */
  let q = 'JavaScript'
</script>

<form>
  <SearchBar bind:value={q} />
</form>
<div class="mt-4 text-center">{ q }</div>
