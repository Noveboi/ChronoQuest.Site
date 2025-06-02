import { beforeNavigate, onNavigate } from "$app/navigation"

export function onExit<T>(callback: () => Promise<T>): void {
    onNavigate(async nav => {
        if (nav.to?.url.pathname !== nav.from?.url.pathname) {
            await callback();
        }
    })
}