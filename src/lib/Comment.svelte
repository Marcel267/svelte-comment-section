<script lang="ts">
	// export let id: number, content: string, createdAt: string, score: number;
	import type { UserComment, UserReply } from "../shared";
	import Card from "./Card.svelte";
	// import Replies from "./Replies.svelte";

	export let item: UserComment | UserReply;

	const isComment = (item: UserComment | UserReply): item is UserReply => {
		return 'replyingTo' in item;
	}
</script>

<Card {item} />

{#if !isComment(item)}
	<!-- <Replies replies={item.replies} /> -->
	{#each item.replies as reply (reply.id)}
		<!-- <Card item={reply} isComment={isComment(item)} /> -->
		<Card item={reply} />
	{/each}
{/if}
