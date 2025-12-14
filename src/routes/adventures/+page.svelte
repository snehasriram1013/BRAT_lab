<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import GalleryGrid from '$lib/components/GalleryGrid.svelte';
    import { adventuresPhotos } from '$lib/content/gallery';
    import { site } from '$lib/content/site';
</script>

<svelte:head>
    <title>Adventures | {site.labName}</title>
</svelte:head>

<PageHeader
    title="Adventures"
    subtitle="A placeholder photo gallery for lab outings, events, conferences, and moments of joy."
/>

<Section
    title="Lab gallery"
    subtitle="Replace the placeholder SVGs in `static/images/adventures` with real photos when ready."
>
    <GalleryGrid photos={adventuresPhotos} />
</Section>

<Section title="Caption ideas" dense>
    <ul class="ideas">
        <li>Placeholder: Conference travel</li>
        <li>Placeholder: Weekly lab meeting</li>
        <li>Placeholder: Community workshop</li>
        <li>Placeholder: Student demo day</li>
    </ul>
</Section>

<style>
    .ideas {
        margin: 0;
        padding-left: 1.5rem;
        color: var(--color-muted);
        display: grid;
        gap: 0.5rem;
        line-height: 1.6;
    }
</style>
