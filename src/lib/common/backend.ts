import type { RequestEvent } from "@sveltejs/kit";

type BackendRequestOptions = Omit<RequestInit, 'body' | 'method'>;
export type InterceptorFn = (response: Response, event: Event) => void;

export interface Backend {
    get<T>(route: string, options?: BackendRequestOptions): Promise<T>
    post<T = any>(route: string, data?: any, options?: BackendRequestOptions): Promise<T>

    addInterceptor(callback: InterceptorFn): void
}

type FetchApi = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
type Event = RequestEvent<Partial<Record<string, string>>, string | null>;

class BackendClass implements Backend {
    private _fetch;
    private _event;
    private _baseUrl: string
    private _headers: Headers
    private _interceptors: InterceptorFn[];

    constructor(event: Event, baseUrl: string) {
        this._fetch = event.fetch;
        this._event = event;
        this._baseUrl = baseUrl;
        this._interceptors = [];

        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json')
    }

    addInterceptor(callback: InterceptorFn): void {
        this._interceptors.push(callback);
    }

    get<T>(route: string, options?: BackendRequestOptions): Promise<T> {
        return this.call<T>(route, {...options, method: 'GET'})
    }
    post<T = any>(route: string, data?: any, options?: BackendRequestOptions): Promise<T> {
        const body = JSON.stringify(data);
        return this.call<T>(route, {...options, method: 'POST', body: body})
    }

    private async call<T>(route: string, options: RequestInit): Promise<T> {
        if (!route.startsWith('/')) 
            route = '/' + route;
        
        const url = this._baseUrl + route;
        let response = await this._fetch(url, { ...options, headers: this._headers});

        for (const inteceptor of this._interceptors) {
            inteceptor(response, this._event);
        }

        if (response.status === 200) {
            if (response.bodyUsed)
                return await response.json();
            
            return null as T;
        }

        throw new Error(response.statusText);
    }
}

export const initApiService = (event: Event, baseUrl: string): Backend => {
    return new BackendClass(event, baseUrl);
};