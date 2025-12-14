<script lang="ts">
    import '../app.css';
    import SiteHeader from '$lib/components/SiteHeader.svelte';
    import SiteFooter from '$lib/components/SiteFooter.svelte';
    import Container from '$lib/components/Container.svelte';
</script>

<SiteHeader />

<main id="main" class="main">
    <Container>
        <slot />
    </Container>
</main>

<SiteFooter />

<style>
    .main {
        min-height: calc(100vh - 200px);
        padding: 0 0 3rem;
    }
</style>
