<script lang="ts">
  export let score: number = 0;
</script>

<div
  class="flex h-10 items-center justify-around rounded-l-lg rounded-r-lg bg-very-light-gray"
>
  <button class="inline-flex h-10 w-10 items-center justify-center">
    <img src="/assets/images/icon-plus.svg" alt="+" />
  </button>
  <span
    class="inline-flex min-w-[25px] justify-center font-medium text-moderate-blue"
  >
    {score}
  </span>
  <button class="inline-flex h-10 w-10 items-center justify-center">
    <img src="/assets/images/icon-minus.svg" alt="-" />
  </button>
</div>
