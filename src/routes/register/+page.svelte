<script lang="ts">
    import { goto } from "$app/navigation";
    import Title from "$lib/common/components/Title.svelte";
    import Form from "$lib/features/user/Form.svelte";
    import { register } from "$lib/features/user/userService";

    async function handleRegister(email: string, password: string): Promise<void> {
        try {
            await register({email, password})
            goto('/login');
        } catch (error) {
            
        }
    }
</script>

<Title text="Register"/>
<Form onSubmit={handleRegister}/>
<a href="/login">Login</a>