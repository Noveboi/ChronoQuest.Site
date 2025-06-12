<script lang="ts">
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
    const question = $derived(data.question);
</script>