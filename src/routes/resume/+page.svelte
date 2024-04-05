<script lang="ts">
  import Card from '$lib/components/card/Card.svelte'
  import Job from '$lib/components/job/Job.svelte'
  import resume from '$lib/constants/job-data.json'
  import { MetaTags } from 'svelte-meta-tags'
</script>

<MetaTags title="Resume - Brendan Betts" />

<main
  class="container my-7 min-h-screen w-full px-6 pb-10 text-white md:my-0 lg:h-full print:my-0 print:max-w-full print:text-black"
>
  <header class="print:border-secondary my-10 print:mb-2 print:mt-0 print:border-b print:pb-4">
    <div class="mb-10 print:hidden">
      <a href="/" class="group flex items-center gap-2 font-sans font-bold"
        ><span class="icon-[bi--arrow-left] transition-all group-hover:-translate-x-2"></span><span
          >Back</span
        ></a
      >
    </div>
    <h1
      class="print:text-primary font-sigmar text-4xl print:font-sans print:text-2xl print:font-extrabold"
    >
      Brendan Betts
    </h1>
    <h2 class="text-3xl font-medium print:text-xl">Senior Frontend Developer</h2>
    <div class="flex gap-2">
      <p>Vancouver, BC Canada</p>
      <span>-</span>
      <a
        href="mailto:bbetts9490@gmail.com"
        class="print:decoration-primary underline underline-offset-2 transition-all hover:decoration-2 hover:underline-offset-4 print:decoration-1"
      >
        Email
      </a>
      <span>-</span>
      <a
        href="tel:604-445-2142"
        class="print:decoration-primary underline underline-offset-2 transition-all hover:decoration-2 hover:underline-offset-4 print:decoration-1"
      >
        604-445-2142
      </a>
      <span>-</span>
      <a
        href="https://github.com/thoross"
        class="print:decoration-primary underline underline-offset-2 transition-all hover:decoration-2 hover:underline-offset-4 print:decoration-1"
        >Github Portfolio</a
      >
    </div>
  </header>
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
        <Card>
          <h4 class="italic print:text-sm">{school.schoolName}</h4>
          <div class="flex justify-between">
            <h4 class="print:text-primary text-xl font-bold print:text-sm">{school.program}</h4>
            <div class="flex gap-x-2">
              <p class="font-medium print:text-sm">{school.startDate}</p>
              <span class="font font-medium print:text-sm">-</span>
              <p class="font-medium print:text-sm">{school.endDate}</p>
            </div>
          </div>
          <p
            class="my-2 text-lg font-light last-of-type:mb-0 print:my-1 print:list-disc print:text-[10px] print:leading-[14px]"
          >
            {school.description}
          </p>
        </Card>
      {/each}
    </div>
  </div>
  <div class="print:hidden">
    <h3 class="mb-4 text-center text-2xl font-bold print:mb-0 print:text-xl">Volunteering</h3>
    <div class="flex flex-col gap-5 print:gap-2">
      {#each resume.volunteering as item}
        <Card>
          <h4 class="italic print:text-sm">{item.name}</h4>
          <div class="flex justify-between">
            <h4 class="print:text-primary text-xl font-bold print:text-sm">{item.position}</h4>
            <p class="font-medium print:text-sm">{item.date}</p>
          </div>
          <p
            class="my-2 text-lg font-light last-of-type:mb-0 print:my-1 print:list-disc print:text-[10px] print:leading-[14px]"
          >
            {item.description}
          </p>
        </Card>
      {/each}
    </div>
  </div>
</main>
