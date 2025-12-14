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
        padding: 3rem 0;
    }

    .section.dense {
        padding: 2rem 0;
    }

    .section-header {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 2rem;
    }

    h2 {
        margin: 0;
        font-size: 1.75rem;
        color: var(--color-text);
        letter-spacing: -0.03em;
        font-weight: 600;
    }

    .section-header p {
        margin: 0;
        max-width: 80ch;
        color: var(--color-muted);
        font-size: 1rem;
        line-height: 1.6;
    }

    .section-body {
        display: block;
    }
</style>
