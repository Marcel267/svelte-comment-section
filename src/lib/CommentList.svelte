<script lang="ts">
	import Comment from "./Comment.svelte";
	import { CommentStore } from "../stores";
</script>

{#each $CommentStore as item (item.id)}
	<Comment {item} />
{/each}
