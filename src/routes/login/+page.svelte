<script lang="ts">
    import Title from "$lib/common/components/Title.svelte";
    import { login } from "$lib/common/stores/auth.svelte";
    import Form from "$lib/features/user/Form.svelte";

    function handleLogin(email: string, password: string){
        login({email, password})
    }
</script>

<Title text="Login" size="4em" />

<div class="login-container">
    <Form onSubmit={handleLogin}/>
</div>

<style>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>