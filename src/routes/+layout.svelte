<script>
  import '../app.css'
</script>

<main class="h-screen w-full container px-6">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background: theme(colors.gray.100); /* fallback for old browsers */
    background: rgb(131, 58, 180);
    background: linear-gradient(324deg, rgba(131, 58, 180, 1) 20%, rgba(29, 148, 253, 1) 80%);
    color: theme(colors.gray.800);
  }
</style>
