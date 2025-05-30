<script lang="ts">
    import Title from "$lib/common/components/Title.svelte";
    import Form from "$lib/features/user/Form.svelte";
    import { register } from "$lib/features/user/userService";

    function handleRegister(email: string, password: string): Promise<void> {
        return register({email, password})
    }
</script>

<Title text="Register"/>
<Form onSubmit={handleRegister}/>