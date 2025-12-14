<script lang="ts">
	export let tags: string[] = [];
</script>

{#if tags.length}
	<ul class="tags">
		{#each tags as tag}
			<li><span class="tag">{tag}</span></li>
		{/each}
	</ul>
{/if}

<style>
	.tags {
		list-style: none;
		padding: 0;
		margin: 0.85rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	li {
		margin: 0;
	}
</style>
