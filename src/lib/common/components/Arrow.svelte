<script lang="ts">
    import Navigate from "./Navigate.svelte";

    type NavigateProps = { to: string, style?: string}

    const { to, style }: NavigateProps = $props();
</script>

<Navigate to={to} style="width=5rem height=5rem">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
</Navigate>