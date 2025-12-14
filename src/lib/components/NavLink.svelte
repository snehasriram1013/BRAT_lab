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
		border-radius: 999px;
		color: rgba(15, 27, 16, 0.92);
		font-weight: 650;
		white-space: nowrap;
	}

	a:hover {
		text-decoration: none;
		background: rgba(255, 255, 255, 0.65);
	}

	a.active {
		background: rgba(46, 125, 50, 0.15);
		color: var(--color-primary-dark);
		border: 1px solid rgba(46, 125, 50, 0.25);
	}
</style>
