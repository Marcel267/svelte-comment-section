<script lang="ts">
	import Image from "./Image.svelte";
	import type { Comment, Reply } from "../shared";
	import Voter from "./Voter.svelte";
	import { UserStore } from "../stores";
	import Button from "./Button.svelte";
	import Modal from "../lib/Modal.svelte";

	export let item: Comment | Reply;

	let showModal = false;

	const isReply = (item: Comment | Reply): item is Reply => {
		return "replyingTo" in item;
	};
</script>

<Modal bind:showModal />
<div
	class="relative mb-4 flex flex-col-reverse rounded-lg bg-white p-4 desktop:mb-6 desktop:flex-row"
>
	<!-- <button class="absolute" on:click={() => (showModal = true)}>
        show modal
    </button> -->
	<div>
		<Voter score={item.score} />
	</div>
	<div>
		<div class="mb-4 flex items-center gap-4">
			<Image src={item.user.image.png} />
			<span class="font-medium">{item.user.username}</span>
			{#if item.user.username === $UserStore.username}
				<span class="rounded-sm bg-moderate-blue px-1 text-sm text-white">
					you
				</span>
			{/if}
			<span class="text-grayish-blue">{item.createdAt}</span>
		</div>
		<p class="mb-4 text-grayish-blue">
			{#if isReply(item)}
				<span class="font-medium text-moderate-blue">
					@{item.replyingTo ?? ""}
				</span>
			{/if}
			{item.content}
		</p>
		<div
			class="absolute bottom-6 right-4 flex justify-end gap-4 desktop:bottom-auto desktop:right-6 desktop:top-6 desktop:gap-6"
		>
			{#if item.user.username === $UserStore.username}
				<Button
					importedFunction={() => (showModal = true)}
					option="ghost"
					class="text-soft-red"
				>
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
