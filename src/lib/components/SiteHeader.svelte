<script lang="ts">
    import Container from './Container.svelte';
    import NavLink from './NavLink.svelte';
    import { site } from '$lib/content/site';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/research', label: 'Research' },
        { href: '/team', label: 'Team' },
        { href: '/publications', label: 'Publications' },
        { href: '/news', label: 'News' },
        { href: '/adventures', label: 'Adventures' },
        { href: '/contact', label: 'Contact' }
    ];

    let menuOpen = false;
</script>

<a class="skip" href="#main">Skip to content</a>

<header class="header">
    <Container as="div" className="inner">
        <div class="brand">
            <a class="brand-link" href="/">
                <span class="brand-title">{site.labName}</span>
                <span class="brand-subtitle">{site.labFullName}</span>
            </a>
        </div>

        <button
            class="menu"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            on:click={() => (menuOpen = !menuOpen)}
        >
            <span class="visually-hidden">Toggle navigation</span>
            <span aria-hidden="true">Menu</span>
        </button>

        <nav id="site-nav" class:open={menuOpen} aria-label="Primary">
            {#each links as link}
                <NavLink href={link.href} label={link.label} />
            {/each}
        </nav>
    </Container>
</header>

<style>
    .skip {
        position: absolute;
        left: -999px;
        top: 0.5rem;
        padding: 0.6rem 0.8rem;
        border-radius: 10px;
        background: var(--color-surface-solid);
        border: 1px solid var(--color-border);
        z-index: 100;
    }

    .skip:focus {
        left: 0.75rem;
    }

    .header {
        position: sticky;
        top: 0;
        z-index: 20;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--color-border);
    }

    .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem 0;
    }

    .brand-link {
        display: grid;
        gap: 0.12rem;
        text-decoration: none;
    }

    .brand-title {
        font-weight: 600;
        letter-spacing: -0.02em;
        color: var(--color-text);
        line-height: 1;
        font-size: 1.1rem;
    }

    .brand-subtitle {
        font-size: 0.85rem;
        color: var(--color-muted);
        line-height: 1.1;
        font-weight: 400;
    }

    .menu {
        display: none;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: var(--radius-sm);
        padding: 0.5rem 1rem;
        font-weight: 500;
        cursor: pointer;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: 0.35rem;
    }

    @media (max-width: 860px) {
        .inner {
            flex-wrap: wrap;
        }

        .menu {
            display: inline-flex;
        }

        nav {
            display: none;
            width: 100%;
            justify-content: flex-start;
            padding: 0.25rem 0 0.75rem;
        }

        nav.open {
            display: flex;
        }
    }
</style>
