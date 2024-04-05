<script lang="ts">
  import Card from '../card/Card.svelte'
  import type { Job } from './Job'
  export let job: Job
</script>

<!-- <div> -->
<Card>
  <div class="mb-4 print:mb-0">
    <h4 class="italic print:text-sm">{job.company.name}</h4>
    <div class="flex justify-between">
      <h4 class="print:text-primary text-xl font-bold print:text-sm">{job.title}</h4>
      <div class="flex gap-x-2">
        <p class="font-medium print:text-sm">{job.startDate}</p>
        <span class="font font-medium print:text-sm">-</span>
        <p class="font-medium print:text-sm">{job.endDate}</p>
      </div>
    </div>
  </div>
  <div>
    <ul>
      {#each job.description as lineItem}
        <li
          class="my-2 text-lg font-light last-of-type:mb-0 print:my-1 print:list-disc print:text-[10px] print:leading-[14px]"
        >
          {lineItem}
        </li>
      {/each}
    </ul>
  </div>
</Card>
