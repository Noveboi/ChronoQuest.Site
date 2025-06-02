<script lang="ts">
    import Title from "$lib/common/components/Title.svelte";
    import Form from "$lib/features/user/Form.svelte";
</script>

<Title size='large'>
    Register
</Title>
<Form action='register'/>
<a href="/login">Login</a>