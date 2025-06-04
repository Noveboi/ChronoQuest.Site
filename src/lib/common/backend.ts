import { getRequestEvent } from "$app/server";
import { cookieName } from "$lib/features/auth/auth.constants";
import { redirect, type RequestEvent } from "@sveltejs/kit";

type BackendRequestOptions = Omit<RequestInit, 'body' | 'method'>;
export type InterceptorFn = (response: Response) => void;

export interface Backend {
    send(route: string, options?: RequestInit): Promise<Response>
    get<T>(route: string, options?: BackendRequestOptions): Promise<T>
    post<T = any>(route: string, data?: any, options?: BackendRequestOptions): Promise<T>
}

type Event = RequestEvent<Partial<Record<string, string>>, string | null>;

class BackendClass implements Backend {
    private _fetch;
    private _baseUrl: string
    private _headers: Headers
    private _interceptors: InterceptorFn[];

    private _logTemplate = 'HTTP %s %s';

    constructor(fetch: FetchApi, baseUrl: string, interceptors: InterceptorFn[]) {
        this._fetch = fetch;
        this._baseUrl = baseUrl;

        this._interceptors = interceptors;
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json')
    }

    async send(route: string, options: RequestInit): Promise<Response> {
        if (!route.startsWith('/')) 
            route = '/' + route;
        
        const url = this._baseUrl + route;

        if (options.method === 'GET') {
            this._headers.delete('Content-Type');
        }

        console.log(this._logTemplate + ' started', options.method, url)
        let response = await this._fetch(url, { ...options, headers: this._headers});
        console.log(this._logTemplate + ' responded %d', options.method, url, response.status)

        this._interceptors.forEach(interceptor => {
            interceptor(response);
        })

        return response;
    }

    get<T>(route: string, options?: BackendRequestOptions): Promise<T> {
        return this.call<T>(route, {...options, method: 'GET', body: null})
    }
    post<T = any>(route: string, data?: any, options?: BackendRequestOptions): Promise<T> {
        const body = JSON.stringify(data);
        return this.call<T>(route, {...options, method: 'POST', body: body})
    }

    private async call<T>(route: string, options: RequestInit): Promise<T> {
        const response = await this.send(route, options);

        if (response.status === 200) {
            try {
                return await response.json();
            } catch {
                return null as T;
            }
        }

        if (response.status === 401 && !route.includes('login')) {
            console.log('User unauthorized.')
            const event = getRequestEvent();
            event.cookies.delete(cookieName, { path: '/' });
            redirect(307, '/login');
        } 

        throw new Error('API Error! ' + response.statusText);
    }
}
 
type FetchApi = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
type ClientOptions = {
    useInterceptors: InterceptorFn[]
}

export const api = (fetch: FetchApi, options?: ClientOptions): Backend => {
    return new BackendClass(fetch, 'http://localhost:5198', options?.useInterceptors ?? []);
}