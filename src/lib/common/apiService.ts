import axios, { type AxiosRequestConfig, type AxiosResponse, AxiosError, type AxiosInstance } from 'axios';
import { browser } from '$app/environment';
import { auth, logout } from '../features/auth/auth.svelte';
import { toast } from '@zerodevx/svelte-toast';
import { ValidationError } from './common';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5198',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
    (config) => {
        if (browser) {
            if (auth.token && config.headers) {
                config.headers.Authorization = `Bearer ${auth.token}`;
                logout();
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling common errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            toast.push('You are unauthorized.')
            logout();
        }

        if (error.response?.status === 400) {
            toast.push('Invalid');
            return;
        }
        
        toast.push(`Error 😭 (${error.response?.status})`)
    }
);

interface ApiOptions extends Omit<AxiosRequestConfig, 'url' | 'baseURL'> {
    includeAuth?: boolean;
}

async function api<T = any>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    const { includeAuth = true, ...axiosOptions } = options;
    
    if (!includeAuth) {
        axiosOptions.headers = { 
            ...(axiosOptions.headers || {}),
            Authorization: undefined 
        };
    }
    
    const response: AxiosResponse<T> = await axiosInstance(endpoint, axiosOptions);
    return response.data;
}

export const apiGet = <T = any>(
    endpoint: string, 
    options: Omit<ApiOptions, 'method' | 'data'> = {}
): Promise<T> => 
    api<T>(endpoint, { ...options, method: 'GET' });

export const apiPost = <T = any>(
    endpoint: string, 
    data?: any, 
    options: Omit<ApiOptions, 'method'> = {}
): Promise<T> => 
    api<T>(endpoint, { ...options, method: 'POST', data });

export const apiPut = <T = any>(
    endpoint: string, 
    data?: any, 
    options: Omit<ApiOptions, 'method'> = {}
): Promise<T> => 
    api<T>(endpoint, { ...options, method: 'PUT', data });

export const apiPatch = <T = any>(
    endpoint: string, 
    data?: any, 
    options: Omit<ApiOptions, 'method'> = {}
): Promise<T> => 
    api<T>(endpoint, { ...options, method: 'PATCH', data });

export const apiDelete = <T = any>(
    endpoint: string, 
    options: Omit<ApiOptions, 'method'> = {}
): Promise<T> => 
    api<T>(endpoint, { ...options, method: 'DELETE' });