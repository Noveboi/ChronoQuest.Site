import { goto } from "$app/navigation";
import { auth } from "../../features/auth/auth.svelte";

type GuardFn = () => void;
const noOp = () => {};

export const isAuthenticated = (url: URL): GuardFn => {
    if (auth.isAuthenticated && url.href.endsWith('login')) {
        console.log('Already authenticated.', url.href)
        return () => goto('/');
    }

    if (!auth.isAuthenticated && !url.href.endsWith('login') && !url.href.endsWith('register')) {
        console.log('Redirect to login.', url.href)
        return () => goto('/login')
    }

    return noOp;
}