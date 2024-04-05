<script lang="ts">
  import Card from '$lib/components/card/Card.svelte'
  import Job from '$lib/components/job/Job.svelte'
  import School from '$lib/components/school/School.svelte'
  import Volunteer from '$lib/components/volunteer/Volunteer.svelte'
  import resume from '$lib/constants/job-data.json'
  import { MetaTags } from 'svelte-meta-tags'

  const metaProps = {
    url: 'https://bbetts.dev',
    title: 'Resume - Brendan Betts',
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
</script>

<MetaTags
  title={metaProps.title}
  openGraph={metaProps}
  twitter={{
    cardType: 'summary_large_image',
    title: metaProps.title,
    image: metaProps.images[0].url,
    imageAlt: metaProps.images[0].alt,
    description: metaProps.description
  }}
/>

<main
  class="container my-7 min-h-screen w-full px-6 pb-10 text-white md:my-0 lg:h-full print:my-0 print:max-w-full print:text-black"
>
  <header class="my-10 print:mb-2 print:mt-0 print:border-b print:border-secondary print:pb-4">
    <div class="mb-10 print:hidden">
      <a href="/" class="group flex items-center gap-2 font-sans font-bold"
        ><span class="icon-[bi--arrow-left] transition-all group-hover:-translate-x-2"></span><span
          >Back</span
        ></a
      >
    </div>
    <h1
      class="text-left font-sigmar text-4xl print:text-left print:font-sans print:text-2xl print:font-extrabold print:text-primary"
    >
      Brendan Betts
    </h1>
    <h2 class="mb-2 text-3xl font-medium print:mb-0 print:text-xl">Senior Frontend Developer</h2>
    <div
      class="flex flex-wrap justify-center gap-2 md:flex-row md:justify-start print:justify-start"
    >
      <p>Vancouver, BC Canada</p>
      <span class="hidden md:block">-</span>
      <a
        href="mailto:bbetts9490@gmail.com"
        class="underline underline-offset-2 transition-all hover:decoration-2 hover:underline-offset-4 print:decoration-primary print:decoration-1"
      >
        Email
      </a>
      <span class="hidden md:block">-</span>
      <a
        href="tel:604-445-2142"
        class="underline underline-offset-2 transition-all hover:decoration-2 hover:underline-offset-4 print:decoration-primary print:decoration-1"
      >
        604-445-2142
      </a>
      <span class="hidden md:block">-</span>
      <a
        href="https://github.com/thoross"
        class="underline underline-offset-2 transition-all hover:decoration-2 hover:underline-offset-4 print:decoration-primary print:decoration-1"
        >Github Portfolio</a
      >
    </div>
  </header>
  <div class="my-8 print:my-2">
    <h3 class="mb-4 text-center text-3xl font-bold print:mb-0 print:text-xl">Skills</h3>
    <div
      class="flex flex-col flex-wrap justify-between gap-5 md:flex-row print:flex-row print:gap-1 print:p-0 md:[&_ul:last-of-type]:flex-auto lg:[&_ul:last-of-type]:flex-initial"
    >
      {#each resume.skills as skill}
        <ul>
          <li class="flex items-center gap-1 text-center md:flex-col print:flex-col">
            <span class="text-lg font-bold print:text-sm">{skill.label}:</span>
            <span class="print:text-[10px]">{skill.items.join(', ')}</span>
          </li>
        </ul>
      {/each}
    </div>
  </div>
  <div class="my-8 print:my-0">
    <h3 class="mb-4 text-center text-3xl font-bold print:mb-0 print:text-xl">
      Professional Experience
    </h3>
    <div class="flex flex-col gap-5 print:gap-2 print:p-0">
      {#each resume.jobs as job}
        <Job {job} />
      {/each}
    </div>
  </div>
  <div class="my-8 print:my-0">
    <h3 class="mb-4 text-center text-2xl font-bold print:mb-0 print:text-xl">Education</h3>
    <div class="flex flex-col gap-5 print:gap-2 print:p-0">
      {#each resume.education as school}
        <School {school} />
      {/each}
    </div>
  </div>
  <div class="print:hidden">
    <h3 class="mb-4 text-center text-2xl font-bold print:mb-0 print:text-xl">Volunteering</h3>
    <div class="flex flex-col gap-5 print:gap-2">
      {#each resume.volunteering as volunteer}
        <Volunteer {volunteer} />
      {/each}
    </div>
  </div>
</main>
