<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Card from '$lib/components/Card.svelte';
    import TagRow from '$lib/components/TagRow.svelte';
    import { projects } from '$lib/content/projects';
    import { site } from '$lib/content/site';
</script>

<svelte:head>
    <title>Research | {site.labName}</title>
</svelte:head>

<PageHeader
    title="Research & Projects"
    subtitle="Placeholder project list. Replace these with current BRAT Lab research directions and featured work."
/>

<Section
    title="Featured projects"
    subtitle="Edit `src/lib/content/projects.ts` to update titles, descriptions, tags, and images."
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
</Section>

<Section title="How we work" subtitle="Add process, methods, and collaboration details here.">
    <div class="how">
        <Card title="Methods (Placeholder)">
            <p>
                User studies, participatory design, audits, prototyping, and mixed-method evaluations.
            </p>
        </Card>
        <Card title="Collaboration (Placeholder)">
            <p>
                Partnerships with campus groups, community organizations, and interdisciplinary collaborators.
            </p>
        </Card>
        <Card title="Student involvement (Placeholder)">
            <p>Ways for students to join, contribute, and publish work—edit this to match your lab structure.</p>
        </Card>
    </div>
</Section>

<style>
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

    .how {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
    }

    @media (max-width: 900px) {
        .grid,
        .how {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 901px) and (max-width: 1100px) {
        .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>
