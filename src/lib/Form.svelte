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
		class="min-h-[90px] w-full resize-none rounded-md border-[1px] border-light-gray px-5 py-2 placeholder:text-grayish-blue desktop:order-none"
		placeholder="Add a comment..."
		name="textarea"
		id="textarea"
		cols="30"
		rows="3"
		bind:this={textareaElement}
		on:input={() => resizeTextarea(textareaElement)}
	/>

	<div class="flex justify-between pt-4">
		<div class="w-fit">
			<Image width="w-12" src={$UserStore.image.png} />
		</div>

		<Button>SEND</Button>
	</div>
</div>

<!-- <div
	class="flex flex-col-reverse rounded-lg bg-black bg-white p-4 desktop:flex-row"
>
	<div class="w-fit bg-red-300">
		<Image width={50} src={$UserStore.image.png} />
	</div>
	<textarea
		class="order-last min-h-[90px] w-full resize-none rounded-md border-[1px] border-light-gray bg-green-600 px-5 py-2 placeholder:text-grayish-blue desktop:order-none"
		placeholder="Add a comment..."
		name="textarea"
		id="textarea"
		cols="30"
		rows="3"
		bind:this={textareaElement}
		on:input={() => resizeTextarea(textareaElement)}
	/>

	<Button class="inline">SEND</Button>
</div> -->
