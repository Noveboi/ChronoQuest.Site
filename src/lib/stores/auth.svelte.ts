import { browser } from "$app/environment";
import { storageKeys } from "$lib/common";
import { apiPost } from "$lib/services/apiService";
import type { User } from "$lib/types/domain.types";
import type { LoginResponse, LoginRequest } from "$lib/types/requests.types";

export interface AuthState {
    user: User | null,
    token: string | null,
    isLoading: boolean,
    isAuthenticated: boolean
    error: string | null
}

export const auth: AuthState = $state({
    user: null,
    token: browser ? localStorage.getItem('token') : null,
    isLoading: false,
    isAuthenticated: false,
    error: null
})

export const logout = () => { }
export const login = async (request: LoginRequest): Promise<void> => {
    auth.isLoading = true

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

    auth.isLoading = false
}