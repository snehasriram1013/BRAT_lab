<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Card from '$lib/components/Card.svelte';
    import { labDescription, site } from '$lib/content/site';
</script>

<svelte:head>
    <title>About | {site.labName}</title>
</svelte:head>

<PageHeader
    title="About BRAT Lab"
    subtitle="Placeholder content describing the lab’s mission, values, and approach."
/>

<Section title="Mission">
    <p class="prose">{labDescription.long}</p>
</Section>

<Section title="What we care about" subtitle="Edit these cards to match your real focus areas.">
    <div class="grid">
        <Card title="Accessibility by default" eyebrow="Theme (Placeholder)">
            <p>
                Placeholder: We design and evaluate technology with accessibility as a first-class requirement.
            </p>
        </Card>
        <Card title="Representation" eyebrow="Theme (Placeholder)">
            <p>
                Placeholder: We examine who is represented in data, systems, and design processes—and who is left out.
            </p>
        </Card>
        <Card title="Responsible innovation" eyebrow="Theme (Placeholder)">
            <p>
                Placeholder: We build methods and tools that support transparency, accountability, and community-centered outcomes.
            </p>
        </Card>
    </div>
</Section>

<Section title="Leadership">
    <div class="leader">
        <img class="photo" src="/images/team/vinitha-placeholder.svg" alt="Placeholder portrait" />
        <div>
            <h2 class="name">{site.director}</h2>
            <p class="muted">
                Placeholder: Add a short director bio, research interests, and contact or office location information here.
            </p>
            <a class="button" href="/team">See the full team</a>
        </div>
    </div>
</Section>

<style>
    .prose {
        max-width: 85ch;
        white-space: pre-wrap;
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

    .leader {
        display: grid;
        grid-template-columns: 140px 1fr;
        gap: 2rem;
        align-items: start;
        padding: 2rem;
        border-radius: var(--radius-md);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
    }

    .photo {
        width: 140px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
    }

    .name {
        margin: 0;
        font-size: 1.35rem;
        color: var(--color-text);
        font-weight: 600;
    }

    .muted {
        margin: 0.75rem 0 1.25rem;
        color: var(--color-muted);
        line-height: 1.6;
    }

    @media (max-width: 900px) {
        .grid {
            grid-template-columns: 1fr;
        }

        .leader {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
        }

        .photo {
            width: 120px;
        }
    }
</style>
