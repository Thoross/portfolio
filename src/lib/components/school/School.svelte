<script lang="ts">
  import Card from '../card/Card.svelte'
  import type { School } from './School'
  export let school: School
</script>

<Card>
  <h4 class="italic print:text-sm">{school.schoolName}</h4>
  <div class="flex flex-col justify-between md:flex-row print:flex-row">
    <h4 class="text-xl font-bold print:text-sm print:text-primary">{school.program}</h4>
    <div class="flex gap-x-2">
      <p class="font-medium print:text-sm">{school.startDate}</p>
      <span class="font font-medium print:text-sm">-</span>
      <p class="font-medium print:text-sm">{school.endDate}</p>
    </div>
  </div>
  <p
    class="text-raleway my-2 text-lg font-light last-of-type:mb-0 print:my-1 print:list-disc print:text-[10px] print:leading-[14px]"
  >
    {school.description}
  </p>
</Card>
