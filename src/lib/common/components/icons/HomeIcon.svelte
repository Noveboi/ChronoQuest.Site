<script lang="ts">
    import IconBase from "./IconBase.svelte";
import type { IconProps } from "./IconProps";

    const props: IconProps = $props();
</script>

<IconBase {...props}>
    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
</IconBase>