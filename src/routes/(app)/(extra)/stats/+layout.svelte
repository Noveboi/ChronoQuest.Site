<script lang="ts">
    import { Chart, LineController, LinearScale, PointElement, LineElement, Title, CategoryScale } from "chart.js";
    import type { LayoutProps } from "./$types";
    import autocolorPlugin from "chartjs-plugin-autocolors";

    const { children }: LayoutProps = $props();

    Chart.register(
        LineController, 
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        autocolorPlugin);

    Chart.defaults.color = '#e0e0e0';
</script>

{@render children()}