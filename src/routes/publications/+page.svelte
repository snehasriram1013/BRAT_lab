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
        gap: 1.25rem;
    }

    .item {
        list-style: none;
        padding: 1.5rem;
        border-radius: var(--radius-md);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
    }

    .title {
        margin: 0;
        font-weight: 600;
        color: var(--color-text);
        font-size: 1.05rem;
    }

    .meta {
        margin: 0.5rem 0 0;
        color: var(--color-muted);
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .links {
        list-style: none;
        padding: 0;
        margin: 1rem 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .links a {
        font-weight: 500;
        color: var(--color-text);
        text-decoration: underline;
        text-decoration-color: var(--color-border);
    }

    .links a:hover {
        text-decoration-color: var(--color-text);
    }

    .callout {
        padding: 2rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
    }

    .muted {
        margin: 0;
        color: var(--color-muted);
        max-width: 75ch;
        line-height: 1.6;
    }
</style>
