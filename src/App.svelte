<script lang="ts">
	import Form from "./lib/Form.svelte";
	import List from "./lib/List.svelte";
	import Modal from "./lib/Modal.svelte";

	// if (
	// 	localStorage.getItem("color-theme") === "dark" ||
	// 	(!("color-theme" in localStorage) &&
	// 		window.matchMedia("(prefers-color-scheme: dark)").matches)
	// ) {
	// 	document.documentElement.classList.add("dark");
	// } else {
	// 	document.documentElement.classList.remove("dark");
	// }
	let showModal = false;
</script>

<main class="relative min-h-screen bg-very-light-gray font-rubik">
	<Modal bind:showModal />
	<button class="absolute" on:click={() => (showModal = true)}>
		show modal
	</button>
	<section class="container mx-auto max-w-3xl px-4 py-8 desktop:py-16">
		<List />
		<Form />
	</section>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
</style>
