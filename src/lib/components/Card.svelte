<script lang="ts">
    export let title: string | undefined = undefined;
    export let eyebrow: string | undefined = undefined;
    export let href: string | undefined = undefined;
</script>

{#if href}
    <a class="card" href={href}>
        {#if eyebrow}
            <p class="eyebrow">{eyebrow}</p>
        {/if}
        {#if title}
            <h3>{title}</h3>
        {/if}
        <div class="content">
            <slot />
        </div>
    </a>
{:else}
    <div class="card">
        {#if eyebrow}
            <p class="eyebrow">{eyebrow}</p>
        {/if}
        {#if title}
            <h3>{title}</h3>
        {/if}
        <div class="content">
            <slot />
        </div>
    </div>
{/if}

<style>
    .card {
        display: block;
        padding: 1.5rem;
        border-radius: var(--radius-md);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        transition:
            transform 0.2s ease,
            border-color 0.2s ease;
    }

    a.card:hover {
        text-decoration: none;
        transform: translateY(-2px);
        border-color: var(--color-text);
    }

    h3 {
        margin: 0.15rem 0 0.5rem;
        color: var(--color-text);
        letter-spacing: -0.02em;
        font-weight: 600;
        font-size: 1.15rem;
    }

    .eyebrow {
        margin: 0;
        font-size: 0.8rem;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: var(--color-muted);
        font-weight: 500;
    }

    .content :global(p) {
        margin: 0.5rem 0 0;
        color: var(--color-muted);
        line-height: 1.6;
    }
</style>
