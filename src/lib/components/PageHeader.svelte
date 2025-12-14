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
        padding: 3rem 0 2rem;
    }

    h1 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.75rem);
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: var(--color-text);
        font-weight: 600;
    }

    p {
        margin: 1rem 0 0;
        max-width: 75ch;
        color: var(--color-muted);
        font-size: 1.05rem;
        line-height: 1.6;
    }
</style>
