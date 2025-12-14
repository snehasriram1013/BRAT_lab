<script lang="ts">
    import Container from '$lib/components/Container.svelte';
    import Section from '$lib/components/Section.svelte';
    import Card from '$lib/components/Card.svelte';
    import TagRow from '$lib/components/TagRow.svelte';
    import { labDescription, site } from '$lib/content/site';
    import { projects } from '$lib/content/projects';
    import { newsItems } from '$lib/content/news';
</script>

<svelte:head>
    <title>{site.labName} | {site.institution}</title>
    <meta
        name="description"
        content="Placeholder site for the Wellesley BRAT Lab (Bringing Representation and Accessibility to Technology)."
    />
</svelte:head>

<section class="hero">
    <div class="hero-text">
        <p class="eyebrow">{site.institution}</p>
        <h1>
            {site.labName}
            <span class="subtitle">{site.labFullName}</span>
        </h1>
        <p class="lead">{site.tagline}</p>

        <div class="cta">
            <a class="button primary" href="/research">Explore research</a>
            <a class="button" href="/team">Meet the team</a>
        </div>

        <p class="director">Directed by {site.director}</p>
    </div>

    <div class="hero-media">
        <img src="/images/hero.svg" alt="BRAT Lab placeholder hero graphic" />
    </div>
</section>

<Section title="About" subtitle="Placeholder copy — replace with the lab’s real mission statement.">
    <p class="prose">{labDescription.short}</p>
    <div class="actions">
        <a class="button" href="/about">Learn more about BRAT Lab</a>
        <a class="button" href="/contact">Get in touch</a>
    </div>
</Section>

<Section
    title="Research & Projects"
    subtitle="A few sample project cards. Edit `src/lib/content/projects.ts` to update."
>
    <div class="grid">
        {#each projects as project}
            <Card title={project.title} eyebrow={project.status}>
                <img class="thumb" src={project.imageSrc} alt="" />
                <p>{project.summary}</p>
                <TagRow tags={project.areas} />
            </Card>
        {/each}
    </div>
    <div class="actions">
        <a class="button primary" href="/research">View all research</a>
    </div>
</Section>

<Section title="Latest news" subtitle="A lightweight news/blog feed (placeholder).">
    <div class="grid">
        {#each newsItems as item}
            <Card title={item.title} eyebrow={item.date}>
                <p>{item.excerpt}</p>
                <TagRow tags={item.tags} />
            </Card>
        {/each}
    </div>
    <div class="actions">
        <a class="button" href="/news">Browse all news</a>
    </div>
</Section>

<Section title="Quick links" dense>
    <div class="quicklinks">
        <a class="button" href="/publications">Publications</a>
        <a class="button" href="/adventures">Adventures gallery</a>
        <a class="button" href="/contact">Contact</a>
    </div>
</Section>

<style>
    .hero {
        display: grid;
        grid-template-columns: 1.25fr 0.9fr;
        gap: 4rem;
        padding: 4rem 0 3rem;
        align-items: center;
    }

    .hero-text {
        display: grid;
        gap: 1.5rem;
    }

    .eyebrow {
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--color-muted);
    }

    h1 {
        margin: 0;
        font-size: clamp(2.5rem, 4.5vw, 3.5rem);
        line-height: 1.1;
        letter-spacing: -0.04em;
        color: var(--color-text);
        font-weight: 600;
    }

    .subtitle {
        display: block;
        margin-top: 0.75rem;
        font-size: 0.5em;
        font-weight: 400;
        color: var(--color-muted);
        letter-spacing: -0.02em;
    }

    .lead {
        margin: 0;
        max-width: 65ch;
        font-size: 1.1rem;
        color: var(--color-muted);
        line-height: 1.7;
    }

    .cta {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .director {
        margin: 0;
        font-size: 0.95rem;
        color: var(--color-muted);
    }

    .hero-media {
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        overflow: hidden;
    }

    .hero-media img {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }

    .prose {
        max-width: 80ch;
        color: var(--color-muted);
        margin: 0;
        line-height: 1.7;
        font-size: 1rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
    }

    .thumb {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        margin: 0.75rem 0 0.5rem;
    }

    .actions {
        margin-top: 1.5rem;
    }

    .quicklinks {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    @media (max-width: 900px) {
        .hero {
            grid-template-columns: 1fr;
            padding-top: 2.5rem;
        }

        .grid {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 901px) and (max-width: 1100px) {
        .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>
