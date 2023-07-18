<script lang="ts">
  import CommentCard from "./CommentCard.svelte";
  import { CommentStore } from "../stores";
</script>

{#each $CommentStore as comment (comment.id)}
  {comment.id} - {comment.content} 
{/each}
<CommentCard />
