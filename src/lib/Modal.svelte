<script lang="ts">
	import Button from "./Button.svelte";

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="w-[400px] rounded-lg bg-white p-4"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<span class="text-2xl font-medium text-dark-blue">Delete comment</span>

		<p class="mt-4 text-grayish-blue">
			Are you sure you want to delete this comment? This will remove the comment
			and can't be undone.
		</p>
		<!-- svelte-ignore a11y-autofocus -->
		<div class="mt-4 flex justify-center gap-3 md:gap-4">
			<Button
				option="secondary"
				autofocus
				importedFunction={() => dialog.close()}>NO, CANCEL</Button
			>
			<Button option="danger" importedFunction={() => dialog.close()}
				>YES, DELETE
			</Button>
		</div>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
