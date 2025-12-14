<script lang="ts">
    export let as: keyof HTMLElementTagNameMap = 'div';
    export let className = '';
</script>

<svelte:element this={as} class={`container ${className}`.trim()} {...$$restProps}>
    <slot />
</svelte:element>

<style>
    .container {
        width: min(1200px, calc(100% - 3rem));
        margin: 0 auto;
    }
</style>
