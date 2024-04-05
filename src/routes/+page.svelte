<script>
  import { MetaTags } from 'svelte-meta-tags'
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

<main
  class="container my-7 min-h-screen w-full px-6 md:my-0 md:h-screen print:my-0 print:max-w-full"
>
  {#if animate}
    <div class="grid h-full w-full place-content-center text-white">
      <div
        in:fly={{ y: 100, duration: 500, easing: backIn }}
        class="mx-auto mb-5 mt-0 w-max rounded-full bg-gradient-to-br from-[#833ab4] to-[#1dcaff] p-1 drop-shadow-lg"
      >
        <img
          class="mx-auto w-52 place-content-center rounded-full drop-shadow-xl"
          src="$lib/bbetts_6x6.jpg"
          alt="Brendan Betts"
        />
      </div>
      <div class="my-12" in:fade={{ duration: 200, delay: 300 }}>
        <h1 class="text-center text-6xl">
          Hi, I'm <span class="font-sigmar">Brendan</span>
        </h1>
      </div>
      <div in:fade={{ duration: 400, delay: 300 }} class="text-center">
        <p class="mb-5 text-2xl">
          I'm a Front End developer from Vancouver, BC building elegant code solutions and award
          winning websites.
        </p>
        <p class="text-2xl">
          I specialize in React, TypeScript, and modern CMSs like Contentful and Sanity.
        </p>
      </div>
      <div
        class="my-6 flex grid-cols-2 place-content-center items-center justify-center gap-6"
        in:fade={{ duration: 500, delay: 600 }}
      >
        <a
          href="https://github.com/thoross"
          target="_blank"
          rel="noreferrer"
          class="group flex flex-col items-center"
        >
          <span class="icon-[bxl--github] text-5xl transition-all group-hover:-translate-y-2" />
          <span class="text-lg">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/bbetts9490/"
          target="_blank"
          rel="noreferrer"
          class="group flex flex-col items-center"
        >
          <span
            class="icon-[bxl--linkedin-square] text-5xl transition-all group-hover:-translate-y-2"
          />
          <span class="text-lg">LinkedIn</span>
        </a>
        <a href="/resume" class="group flex flex-col items-center">
          <span class="icon-[bxs--detail] text-5xl transition-all group-hover:-translate-y-2"
          ></span>
          <span class="text-lg">Resume</span>
        </a>
      </div>
    </div>
  {/if}
</main>

<MetaTags
  title="Home - Brendan Betts"
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
