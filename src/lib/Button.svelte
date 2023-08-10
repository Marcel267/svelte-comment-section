<script lang="ts">
	import type { ButtonOptions } from "../shared";
	export let option: keyof ButtonOptions = "primary";

	const colors = {
		primary:
			"text-md max-w-fit rounded-md bg-moderate-blue px-7 py-3.5 font-medium text-white hover:opacity-50",
		ghost:
			"text-md flex items-center justify-center gap-2 font-medium hover:opacity-50",
	};
</script>

<button class={colors[option] + " " + $$restProps.class || ""}>
	<!-- <span class={colors[option]}> -->
	<slot />
	<!-- </span> -->
</button>
