<script lang="ts">
	import type { Comment, Reply } from "../shared";
	import { CommentStore } from "../stores";
	import Card from "./Card.svelte";

	const isReply = (item: Comment | Reply): item is Reply => {
		return "replyingTo" in item;
	};
</script>

{#each $CommentStore as item (item.id)}
	<Card {item} />

	{#if !isReply(item)}
		<div
			class="border-s-2 border-x-light-gray ps-4 desktop:ms-10 desktop:ps-10"
		>
			{#each item.replies as reply (reply.id)}
				<Card item={reply} />
			{/each}
		</div>
	{/if}
{/each}
