<script>
  import { MetaTags } from 'svelte-meta-tags'
  import Fa from 'svelte-fa'
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import { fly, fade } from 'svelte/transition'
  import { backIn } from 'svelte/easing'

  const metaProps = {
    url: 'https://bbetts.dev',
    title: 'Brendan Betts',
    description:
      "Hi, I'm Brendan. I'm a Front End developer from Vancouver, BC building elegant code solutions and award winning websites.",
    images: [
      {
        url: 'https://bbetts.dev/bbetts_6x6.jpg',
        width: 432,
        height: 432,
        alt: 'Brendan Betts'
      }
    ]
  }

  let animate = false
  setInterval(() => {
    animate = true
  }, 500)
</script>

{#if animate}
  <div class="h-full w-full grid place-content-center text-white">
    <div in:fly={{ y: 100, duration: 500, easing: backIn }}>
      <img
        class="place-content-center rounded-full w-52 mx-auto drop-shadow-xl border-4 border-pink-100"
        src="$lib/bbetts_6x6.jpg"
        alt="Brendan Betts"
      />
    </div>
    <div class="my-12" in:fade={{ duration: 200, delay: 300 }}>
      <h1 class="text-6xl text-center">
        Hi, I'm <span class="font-sigmar">Brendan</span>
      </h1>
    </div>
    <div in:fade={{ duration: 400, delay: 300 }} class="text-center">
      <p class="text-2xl mb-5">
        I'm a Front End developer from Vancouver, BC building elegant code solutions and award
        winning websites.
      </p>
      <p class="text-2xl">
        I specialize in React, TypeScript, and modern CMSs like Contentful and Sanity.
      </p>
    </div>
    <div
      class="flex place-content-center my-6 grid-cols-2 justify-center gap-6"
      in:fade={{ duration: 500, delay: 600 }}
    >
      <a href="https://github.com/thoross" target="_blank" rel="noreferrer">
        <Fa icon={faGithub} class="text-3xl" />
      </a>
      <a href="https://www.linkedin.com/in/bbetts9490/" target="_blank" rel="noreferrer">
        <Fa icon={faLinkedin} class="text-3xl" />
      </a>
    </div>
  </div>
{/if}

<MetaTags
  title="Brendan Betts"
  description="Hi, I'm Brendan. I'm a Front End developer from Vancouver, BC building elegant code solutions and award winning websites."
  openGraph={metaProps}
  twitter={{
    cardType: 'summary_large_image',
    title: metaProps.title,
    image: metaProps.images[0].url,
    imageAlt: metaProps.images[0].alt,
    description: metaProps.description
  }}
/>
