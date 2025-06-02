<script lang="ts">
    import IconBase from "./IconBase.svelte";
import type { IconProps } from "./IconProps";

    const props: IconProps = $props();
</script>

<IconBase {...props}>
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
</IconBase>