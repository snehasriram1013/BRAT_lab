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
		background: rgba(200, 230, 201, 0.75);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(27, 94, 32, 0.18);
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.9rem 0;
	}

	.brand-link {
		display: grid;
		gap: 0.12rem;
		text-decoration: none;
	}

	.brand-title {
		font-weight: 850;
		letter-spacing: -0.02em;
		color: var(--color-primary-dark);
		line-height: 1;
	}

	.brand-subtitle {
		font-size: 0.9rem;
		color: rgba(15, 27, 16, 0.75);
		line-height: 1.1;
	}

	.menu {
		display: none;
		border: 1px solid rgba(27, 94, 32, 0.28);
		background: rgba(255, 255, 255, 0.65);
		border-radius: 999px;
		padding: 0.55rem 0.85rem;
		font-weight: 700;
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
