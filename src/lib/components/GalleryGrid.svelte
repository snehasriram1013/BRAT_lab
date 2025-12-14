<script lang="ts">
	import type { GalleryPhoto } from '$lib/content/gallery';

	export let photos: GalleryPhoto[];
</script>

<div class="grid">
	{#each photos as photo}
		<figure class="item">
			<img src={photo.src} alt={photo.alt} loading="lazy" />
			<figcaption>{photo.caption}</figcaption>
		</figure>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.item {
		margin: 0;
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		background: rgba(255, 255, 255, 0.6);
		box-shadow: var(--shadow-sm);
		overflow: hidden;
	}

	img {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	figcaption {
		padding: 0.8rem 0.9rem 0.95rem;
		font-size: 0.95rem;
		color: var(--color-muted);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
