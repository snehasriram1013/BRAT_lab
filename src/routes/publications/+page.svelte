<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import { publications } from '$lib/content/publications';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>Publications | {site.labName}</title>
</svelte:head>

<PageHeader
	title="Publications"
	subtitle="Placeholder list of papers and posters. Edit `src/lib/content/publications.ts` to update citations."
/>

<Section title="Selected publications">
	<ol class="list">
		{#each publications as pub}
			<li class="item">
				<p class="title">{pub.title}</p>
				<p class="meta">{pub.authors}</p>
				<p class="meta">
					{pub.venue} · {pub.year}
				</p>
				{#if pub.links?.length}
					<ul class="links">
						{#each pub.links as link}
							<li><a href={link.href}>{link.label}</a></li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ol>
</Section>

<Section title="How to cite" subtitle="Optional: add BibTeX files or a Zotero group link here." dense>
	<div class="callout">
		<p class="muted">
			Placeholder: Add a short note about how to cite BRAT Lab work, or provide links to a publications manager.
		</p>
		<a class="button" href="#">Placeholder link</a>
	</div>
</Section>

<style>
	.list {
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	.item {
		list-style: none;
		padding: 1.1rem;
		border-radius: var(--radius-md);
		background: rgba(255, 255, 255, 0.7);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
	}

	.title {
		margin: 0;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.meta {
		margin: 0.3rem 0 0;
		color: var(--color-muted);
	}

	.links {
		list-style: none;
		padding: 0;
		margin: 0.85rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.links a {
		font-weight: 650;
		color: var(--color-primary-dark);
	}

	.callout {
		padding: 1rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		background: rgba(255, 255, 255, 0.65);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.muted {
		margin: 0;
		color: var(--color-muted);
		max-width: 75ch;
	}
</style>
