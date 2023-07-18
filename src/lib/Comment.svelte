<script lang="ts">
	// export let id: number, content: string, createdAt: string, score: number;
	import type { UserComment } from "../shared";
	import Card from "./Card.svelte";

	export let comment: UserComment;
</script>

<Card {comment} />
