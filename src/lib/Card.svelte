<script lang="ts">
	import Image from "./Image.svelte";
	import type { UserComment, UserReply } from "../shared";
	import Voter from "./Voter.svelte";
	import GhostButton from "./GhostButton.svelte";

	export let item: UserComment | UserReply;
	// export let isComment: boolean;

	const isComment = (item: UserComment | UserReply): item is UserReply => {
		return 'replyingTo' in item;
	}
</script>

<div class="mb-5 rounded-lg bg-white p-4">
	<div class="mb-4 flex items-center gap-4">
		<Image src={item.user.image.png} width={35} />
		<span class="font-medium">{item.user.username}</span>
		<span class="text-grayish-blue">{item.createdAt}</span>
	</div>
	<p class="mb-4 text-grayish-blue">
		{#if isComment(item)}
		<!-- {#if isComment} -->
			<span>
				{item.replyingTo ? 'test' : ''}
			</span>
		{/if}
		{item.content}
	</p>
	<div class="flex justify-between">
		<Voter score={item.score} />
		<div class="flex gap-5">
			<GhostButton class="text-moderate-blue">
				<img src="./assets/images/icon-reply.svg" alt="Arrow" />Reply
			</GhostButton>
		</div>
	</div>
</div>