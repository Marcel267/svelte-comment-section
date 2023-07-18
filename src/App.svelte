<script lang="ts">
	import CommentForm from "./lib/CommentForm.svelte";
	import CommentList from "./lib/CommentList.svelte";

	// if (
	// 	localStorage.getItem("color-theme") === "dark" ||
	// 	(!("color-theme" in localStorage) &&
	// 		window.matchMedia("(prefers-color-scheme: dark)").matches)
	// ) {
	// 	document.documentElement.classList.add("dark");
	// } else {
	// 	document.documentElement.classList.remove("dark");
	// }
</script>

<main class="min-h-screen bg-very-light-gray font-rubik">
	<section class="container mx-auto px-4 py-6">
		<CommentList />
		<!-- <CommentForm /> -->
	</section>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
</style>
