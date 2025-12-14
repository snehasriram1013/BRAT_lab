<script lang="ts">
	export let title: string | undefined = undefined;
	export let eyebrow: string | undefined = undefined;
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a class="card" href={href}>
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}
		{#if title}
			<h3>{title}</h3>
		{/if}
		<div class="content">
			<slot />
		</div>
	</a>
{:else}
	<div class="card">
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}
		{#if title}
			<h3>{title}</h3>
		{/if}
		<div class="content">
			<slot />
		</div>
	</div>
{/if}

<style>
	.card {
		display: block;
		padding: 1.15rem;
		border-radius: var(--radius-md);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
		transition:
			transform 120ms ease,
			box-shadow 120ms ease,
			background 120ms ease;
	}

	a.card:hover {
		text-decoration: none;
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
		background: rgba(255, 255, 255, 0.9);
	}

	h3 {
		margin: 0.15rem 0 0.5rem;
		color: var(--color-primary-dark);
		letter-spacing: -0.01em;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.85rem;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: rgba(27, 94, 32, 0.8);
	}

	.content :global(p) {
		margin: 0.35rem 0 0;
		color: var(--color-muted);
	}
</style>
