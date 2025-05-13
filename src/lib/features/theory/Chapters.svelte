<!-- Mary, feel free to remove this once you actually start working on this! -->
<script lang="ts">
    import { apiGet } from "$lib/services/apiService";
    import type { Chapter } from "$lib/types/domain.types";

    let chapters: readonly Chapter[] = $state([])

    async function getChapters() {
        const response = await apiGet<Chapter[]>('/chapters')
        chapters = response;
    }
</script>

<div class="container">
    <button type="button" onclick={getChapters}>Get Example Chapters from Back-end</button>
    <ul>
        {#if chapters.length === 0}
            <h1>No chapters found!</h1>
        {/if}
        {#each chapters as chapter}
            <li>
                {chapter.title} - "{chapter.content}"
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
        .container {
        margin-top: 1rem;
        padding: 1rem;
        background-color: purple;
        border: 4px dotted dodgerblue;
        color: white;

        > button {
            all: unset;
            background-color: orange;
            color: darkmagenta;
            user-select: none;
            padding: 0.5rem 1.25rem;
            cursor: pointer;
        }
    }
</style>