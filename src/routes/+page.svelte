<script lang="ts">
    import { apiGet } from "$lib/services/apiService";
    import { auth, login } from "$lib/stores/auth.svelte";
    import type { Chapter } from "$lib/types/domain.types";
    import type { LoginRequest } from "$lib/types/requests.types";

    const request: LoginRequest = $state({
        email: '',
        password: ''
    })

    let chapters: readonly Chapter[] = $state([])

    function onsubmit(e: SubmitEvent) {
        e.preventDefault()
        login(request)
    }

    async function getChapters() {
        const response = await apiGet<Chapter[]>('/chapters')
        chapters = response;
    }
</script>

<form onsubmit={onsubmit}>
    <label for="email">Email</label>
    <input id="email" type="email" bind:value={request.email}>

    <label for="pass">Password</label>
    <input id="pass" type="password" bind:value={request.password}>

    <button type="submit">Sign In</button>
</form>

<p>Authenticated: {auth.isAuthenticated}</p>
<p>Loading: {auth.isLoading}</p>
<p>Token: {auth.token}</p>

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
        padding: 1rem;
        background-color: purple;
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