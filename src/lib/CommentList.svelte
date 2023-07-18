<script lang="ts">
	import Comment from "./Comment.svelte";
	import { CommentStore } from "../stores";
</script>

{#each $CommentStore as comment (comment.id)}
	<Comment {comment} />
{/each}
