<script lang="ts">
	import { UserStore } from "../stores";
	import Image from "./Image.svelte";
	import Button from "./Button.svelte";

	let textareaElement: HTMLTextAreaElement;

	function resizeTextarea(textareaElement: HTMLTextAreaElement) {
		textareaElement.style.height = "auto";
		textareaElement.style.height = `${textareaElement.scrollHeight + 2}px`;
	}
</script>

<div class="rounded-lg bg-white p-4">
	<textarea
		class="min-h-[90px] w-full resize-none rounded-md border-[1px] border-light-gray px-5 py-2 placeholder:text-grayish-blue"
		placeholder="Add a comment..."
		name="textarea"
		id="textarea"
		cols="30"
		rows="3"
		bind:this={textareaElement}
		on:input={() => resizeTextarea(textareaElement)}
	/>

	<div class="flex justify-between pt-5">
		<Image src={$UserStore.image.png} />
		<Button>SEND</Button>
	</div>
</div>
