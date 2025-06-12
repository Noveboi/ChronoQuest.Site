<script lang="ts">
    import { Chart, LineController, LinearScale, PointElement, LineElement, Title, CategoryScale, BarController, BarElement, PieController, ArcElement, Legend, Tooltip } from "chart.js";
    import type { LayoutProps } from "./$types";
    import autocolorPlugin from "chartjs-plugin-autocolors";
    import Navigate from "$lib/common/components/Navigate.svelte";

    const { children }: LayoutProps = $props();

    Chart.register(
        BarController,
        PieController,
        LineController, 
        CategoryScale,
        LinearScale,
        PointElement,
        ArcElement,
        BarElement,
        LineElement,
        Title,
        Legend,
        Tooltip,
        autocolorPlugin);

    Chart.defaults.color = '#e0e0e0';
</script>

<nav>
    <Navigate to='/stats'>Performance</Navigate>
    <Navigate to='/stats/chapters'>Chapters</Navigate>
    <Navigate to='/stats/questions'>Questions</Navigate>
</nav>

{@render children()}

<style lang="scss">
    nav {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        gap: 1rem;
    }
</style>