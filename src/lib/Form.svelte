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

<div
	class="flex flex-wrap justify-between rounded-lg bg-white p-4 desktop:gap-4"
>
	<div class="flex w-fit items-center desktop:block desktop:flex-initial">
		<Image
			class="desktop:ml-2 desktop:mt-3 desktop:w-10"
			src={$UserStore.image.png}
		/>
	</div>

	<textarea
		class="order-first mb-4 min-h-[90px] min-w-full resize-none rounded-md border-[1px] border-light-gray px-5 py-2 placeholder:text-grayish-blue desktop:order-none desktop:mb-0 desktop:min-w-fit desktop:flex-1"
		placeholder="Add a comment..."
		name="textarea"
		id="textarea"
		cols="30"
		rows="3"
		bind:this={textareaElement}
		on:input={() => resizeTextarea(textareaElement)}
	/>

	<Button>SEND</Button>
</div>
