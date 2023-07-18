<script lang="ts">
  import CommentList from "./lib/CommentList.svelte";

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
</script>

<main>
  <h1 class="text-2xl font-medium underline mb-5">Hallo</h1>

  <CommentList />
</main>
