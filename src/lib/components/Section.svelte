<script lang="ts">
	export let title: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let dense = false;
</script>

<section class:dense class="section">
	{#if title}
		<header class="section-header">
			<h2>{title}</h2>
			{#if subtitle}
				<p>{subtitle}</p>
			{/if}
		</header>
	{/if}

	<div class="section-body">
		<slot />
	</div>
</section>

<style>
	.section {
		padding: 2rem 0;
	}

	.section.dense {
		padding: 1.25rem 0;
	}

	.section-header {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 1rem;
	}

	h2 {
		margin: 0;
		font-size: 1.35rem;
		color: var(--color-primary-dark);
		letter-spacing: -0.01em;
	}

	.section-header p {
		margin: 0;
		max-width: 80ch;
		color: var(--color-muted);
	}

	.section-body {
		display: block;
	}
</style>
