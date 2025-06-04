// import { browser } from "$app/environment";
// import type { NavigationTarget } from "@sveltejs/kit";
// import { getContext, setContext } from "svelte";

// /**
//  * Determines where the user left off.
//  */
// class LocalUserMarker {
//     public url: string = $state<string>('/');

//     public static createOrRecover(): LocalUserMarker {
//         const url = browser ? localStorage.getItem(KEY) : null;
//         const marker = new LocalUserMarker();
        
//         if (url) 
//             marker.url = url;

//         return marker;
//     }

//     public captureUrl<T extends {to: NavigationTarget | null}>(nav: T): void {
//         if (!nav.to){
//             console.error('Navigation target is null.', nav)
//             return;
//         }

//         if (nav.to.url.pathname === '/' || !nav.to.route.id?.includes('(main)'))
//             return;

//         this.url = nav.to.url.pathname
//         this.store(this.url);
//     }

//     public isNew(): boolean {
//         return !this.url || this.url === '/';
//     }

//     private store(url: string) {
//         if (browser) {
//             console.log('Storing', url)
//             localStorage.setItem(KEY, url)
//         } else {
//         }
//     }
// }

// const BROWSER_ONLY_ERROR: Error = new Error('Please only use UserMarker in a browser environment.'); 
// const KEY = '$MARKER_';

// export const setUserMarker = (): LocalUserMarker => {
//     return setContext(KEY, LocalUserMarker.createOrRecover());;
// }

// export const getUserMarker = (): LocalUserMarker => {
//     return getContext(KEY);
// }