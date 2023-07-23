<script lang="ts">
	// export let id: number, content: string, createdAt: string, score: number;
	import type { UserComment } from "../shared";
	import Card from "./Card.svelte";
	// import Replies from "./Replies.svelte";

	export let item: UserComment;
</script>

<Card {item} />

{#if item.replies.length !== 0}
	<!-- <Replies replies={item.replies} /> -->
	{#each item.replies as reply (reply.id)}
		<Card item={reply} />
	{/each}
{/if}
