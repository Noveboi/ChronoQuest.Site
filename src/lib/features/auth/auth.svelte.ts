import { browser } from "$app/environment";
import { storageKeys } from "$lib/common/common";
import type { LoginRequest, LoginResponse } from "$lib/features/user/user.requests";
import type { User } from "$lib/features/user/user.types";
import { apiPost } from "../../common/apiService";

export interface AuthState {
    user: User | null,
    token: string | null,
    isLoading: boolean,
    isAuthenticated: boolean
    error: string | null
}

export const auth: AuthState = $state({
    user: null,
    token: browser ? localStorage.getItem(storageKeys.accessToken) : null,
    isLoading: false,
    isAuthenticated: browser ? localStorage.getItem(storageKeys.accessToken) ? true : false : false,
    error: null
})

export const logout = () => { 
    auth.isAuthenticated = false;
    auth.user = null;
    auth.token = null;
    
    if (browser) {
        localStorage.removeItem(storageKeys.accessToken);
    }
}
export const login = async (request: LoginRequest): Promise<void> => {
    try {
        const data = await apiPost<LoginResponse>('/login', request);
        const token = data.accessToken;

        if (browser) {
            localStorage.setItem(storageKeys.accessToken, token)
        }

        auth.token = token;
        auth.isAuthenticated = true; 
        auth.error = null
    } catch (error) {
        auth.error = 'Wrong username or password'
    }
}