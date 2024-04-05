<script lang="ts">
  import '../app.css'
  import { onNavigate } from '$app/navigation'
  import { MetaTags } from 'svelte-meta-tags'

  onNavigate((navigation) => {
    //@ts-expect-error
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      //@ts-expect-error
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<slot />

<style lang="postcss">
  :global(html) {
    background: theme(colors.gray.100); /* fallback for old browsers */
    background: rgb(131, 58, 180);
    background: linear-gradient(324deg, rgba(131, 58, 180, 1) 20%, rgba(29, 148, 253, 1) 80%);
    color: theme(colors.gray.800);
  }
</style>
