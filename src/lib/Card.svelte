<script lang="ts">
	import Image from "./Image.svelte";
	import type { UserComment } from "../shared";
	import Voter from "./Voter.svelte";

	export let comment: UserComment;
</script>

<div class="mb-5 rounded-lg bg-white p-4">
	<div class="mb-4 flex items-center gap-4">
		<Image src={comment.user.image.png} width={35} />
		<span class="font-medium">{comment.user.username}</span>
		<span class="text-grayish-blue">{comment.createdAt}</span>
	</div>
	<p class="mb-4 text-grayish-blue">
		{comment.content}
	</p>
	<div class="flex justify-between">
		<Voter score={comment.score} />
		<!-- <GhostButton>

		</GhostButton> -->
	</div>
</div>
