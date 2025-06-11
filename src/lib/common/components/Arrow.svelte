<script lang="ts">
    import Navigate from "./Navigate.svelte";

    type NavigateProps = {
         to: string, 
         style?: string,
         point?: 'right' | 'left',
         disabled?: boolean
    }

    const { to, style, disabled = false, point = 'right' }: NavigateProps = $props();
</script>

<Navigate {to} {style} {disabled} preload={false}>
    <svg class="point-{point}" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -960 960 960" fill="#e3e3e3">
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>
</Navigate>


<style>
    .point-left {
        transform: rotateY(180deg);
    }
</style>