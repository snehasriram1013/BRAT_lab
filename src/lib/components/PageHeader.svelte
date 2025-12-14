<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
</script>

<header class="page-header">
	<h1>{title}</h1>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
</header>

<style>
	.page-header {
		padding: 2.25rem 0 1.25rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.8rem, 2.8vw, 2.6rem);
		line-height: 1.15;
		letter-spacing: -0.02em;
		color: var(--color-primary-dark);
	}

	p {
		margin: 0.65rem 0 0;
		max-width: 75ch;
		color: var(--color-muted);
		font-size: 1.05rem;
	}
</style>
