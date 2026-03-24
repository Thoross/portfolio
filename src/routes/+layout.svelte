<script lang="ts">
  import '../app.css'
  import { onNavigate } from '$app/navigation'
  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

{@render children()}

<style lang="postcss">
  :global(html) {
    background: rgb(131, 58, 180);
    background: linear-gradient(324deg, rgba(131, 58, 180, 1) 20%, rgba(29, 148, 253, 1) 80%);
    color: #1f2937;
  }
</style>
