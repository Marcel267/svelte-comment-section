<script lang="ts">
	export let score: number = 0;
</script>

<div
	class="inline-flex h-10 items-center justify-around rounded-l-lg rounded-r-lg bg-very-light-gray desktop:me-6 desktop:ms-2 desktop:mt-2 desktop:h-24 desktop:w-10 desktop:flex-col"
>
	<button class="p-3">
		<img src="./assets/images/icon-plus.svg" alt="Plus" />
	</button>
	<span
		class="inline-flex min-w-[25px] justify-center font-medium text-moderate-blue"
	>
		{score}
	</span>
	<button class="p-3">
		<img src="./assets/images/icon-minus.svg" alt="Minus" />
	</button>
</div>
