<script lang="ts">
	import Image from "./Image.svelte";
	import type { Comment, Reply } from "../shared";
	import Voter from "./Voter.svelte";
	import { UserStore } from "../stores";
	import Button from "./Button.svelte";

	export let item: Comment | Reply;

	const isComment = (item: Comment | Reply): item is Reply => {
		return "replyingTo" in item;
	};
</script>

<div class="mb-4 rounded-lg bg-white p-4">
	<div class="mb-4 flex items-center gap-4">
		<Image src={item.user.image.png} />
		<span class="font-medium">{item.user.username}</span>
		{#if item.user.username == $UserStore.username}
			<span class="rounded-sm bg-moderate-blue px-1 text-sm text-white">
				you
			</span>
		{/if}
		<span class="text-grayish-blue">{item.createdAt}</span>
	</div>
	<p class="mb-4 text-grayish-blue">
		{#if isComment(item)}
			<span class="font-medium text-moderate-blue">
				@{item.replyingTo ?? ""}
			</span>
		{/if}
		{item.content}
	</p>
	<div class="flex justify-between">
		<Voter score={item.score} />
		<div class="flex gap-4">
			{#if item.user.username === $UserStore.username}
				<Button option="ghost" class="text-soft-red">
					<img src="./assets/images/icon-delete.svg" alt="Delete" />Delete
				</Button>
				<Button option="ghost" class="text-moderate-blue">
					<img src="./assets/images/icon-edit.svg" alt="Pencil" />Edit
				</Button>
			{:else}
				<Button option="ghost" class="text-moderate-blue">
					<img src="./assets/images/icon-reply.svg" alt="Arrow" />Reply
				</Button>
			{/if}
		</div>
	</div>
</div>
