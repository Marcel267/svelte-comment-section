<script lang="ts">
	export let score: number = 0;
</script>

<div
	class="flex h-10 items-center justify-around rounded-l-lg rounded-r-lg bg-very-light-gray"
>
	<!-- <div class="rounded-l-lg rounded-r-lg bg-very-light-gray"> -->
	<!-- <button class="inline-flex h-10 w-10 items-center justify-center bg-red-500">
		<img src="./public/assets/images/icon-plus.svg" alt="Plus" />
	</button>
	<span
		class="inline-flex h-10 w-8 items-center justify-center bg-blue-500 font-medium text-moderate-blue"
		>{score}
	</span>
	<button
		class="inline-flex h-10 w-10 items-center justify-center bg-green-500"
	>
		<img src="./public/assets/images/icon-minus.svg" alt="Minus" />
	</button> -->

	<button class="p-3">
		<!-- <img src="./assets/images/icon-plus.svg" alt="Plus" /> -->
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
