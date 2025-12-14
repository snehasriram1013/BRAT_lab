<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;
    export let label: string;

    $: pathname = $page.url.pathname;
    $: isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
</script>

<a class:active={isActive} aria-current={isActive ? 'page' : undefined} {href}>
    {label}
</a>

<style>
    a {
        padding: 0.5rem 0.75rem;
        color: var(--color-muted);
        font-weight: 500;
        font-size: 0.95rem;
        white-space: nowrap;
        transition: color 0.2s ease;
    }

    a:hover {
        text-decoration: none;
        color: var(--color-text);
    }

    a.active {
        color: var(--color-text);
        font-weight: 600;
    }
</style>
