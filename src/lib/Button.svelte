<script lang="ts">
	import type { ButtonOptions, ButtonClickHandler } from "../shared";
	export let option: keyof ButtonOptions = "primary";
	export let importedFunction: ButtonClickHandler | undefined = undefined;

	const colors = {
		primary: "bg-moderate-blue text-white px-7 py-3",
		danger: "bg-soft-red text-white px-4 xs:px-7 py-3",
		secondary: "bg-grayish-blue text-white px-4 xs:px-7 py-3",
		ghost: "gap-2",
	};
</script>

<div>
	<button
		class="text-md flex items-center justify-center rounded-md font-medium hover:opacity-50 {colors[
			option
		] +
			' ' +
			$$restProps.class || ''}"
		on:click={() => importedFunction?.()}
	>
		<slot />
	</button>
</div>
