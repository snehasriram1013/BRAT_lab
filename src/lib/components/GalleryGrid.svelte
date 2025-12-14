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
        gap: 1.5rem;
    }

    .item {
        margin: 0;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        overflow: hidden;
        transition: transform 0.2s ease;
    }

    .item:hover {
        transform: translateY(-2px);
    }

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }

    figcaption {
        padding: 1rem 1.25rem;
        font-size: 0.9rem;
        color: var(--color-muted);
        line-height: 1.5;
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
