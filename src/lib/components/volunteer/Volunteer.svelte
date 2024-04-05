<script lang="ts">
  import type { Volunteer } from './Volunteer'
  import Card from '../card/Card.svelte'
  export let volunteer: Volunteer
</script>

<Card>
  <h4 class="italic print:text-sm">{volunteer.name}</h4>
  <div class="flex justify-between">
    <h4 class="text-xl font-bold print:text-sm print:text-primary">{volunteer.position}</h4>
    <p class="font-medium print:text-sm">{volunteer.date}</p>
  </div>
  <p
    class="my-2 text-lg font-light last-of-type:mb-0 print:my-1 print:list-disc print:text-[10px] print:leading-[14px]"
  >
    {volunteer.description}
  </p>
</Card>
