<script lang="ts">
	import type { Comment, Reply } from "../shared";
	import Card from "./Card.svelte";

	export let item: Comment | Reply;

	const isComment = (item: Comment | Reply): item is Reply => {
		return "replyingTo" in item;
	};
</script>

<Card {item} />

{#if !isComment(item)}
	<div class="border-s-2 border-x-light-gray ps-4">
		{#each item.replies as reply (reply.id)}
			<Card item={reply} />
		{/each}
	</div>
{/if}
