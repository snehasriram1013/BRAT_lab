<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Card from '$lib/components/Card.svelte';
    import TagRow from '$lib/components/TagRow.svelte';
    import { newsItems } from '$lib/content/news';
    import { site } from '$lib/content/site';
</script>

<svelte:head>
    <title>News | {site.labName}</title>
</svelte:head>

<PageHeader
    title="News & Updates"
    subtitle="Placeholder news/blog list. Replace with lab announcements, student spotlights, and research updates."
/>

<Section title="Posts">
    <div class="grid">
        {#each newsItems as item}
            <Card title={item.title} eyebrow={item.date}>
                <p>{item.excerpt}</p>
                <TagRow tags={item.tags} />
            </Card>
        {/each}
    </div>
</Section>

<Section title="Subscribe" subtitle="Optional: add an email signup or RSS link." dense>
    <div class="subscribe">
        <p class="muted">Placeholder: Add a newsletter form, RSS link, or social handles.</p>
        <a class="button" href="#">Placeholder subscribe link</a>
    </div>
</Section>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
    }

    .subscribe {
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

    @media (max-width: 900px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
