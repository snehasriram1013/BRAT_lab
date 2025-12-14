<script lang="ts">
	import { page } from '$app/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Page not found</title>
</svelte:head>

<PageHeader title="Something went wrong" subtitle="This is a generic error page for the site skeleton." />

<p style="color: var(--color-muted)">Status: {$page.status}</p>
<p style="color: var(--color-muted)">{$page.error?.message ?? 'Unknown error'}</p>

<a class="button" href="/">Back to home</a>
