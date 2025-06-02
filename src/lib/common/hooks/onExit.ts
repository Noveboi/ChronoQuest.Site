import { beforeNavigate } from "$app/navigation"

export const onExit = (callback: () => void) => {
    beforeNavigate(nav => {
        if (nav.to?.url.pathname !== nav.from?.url.pathname) {
            callback();
        }
    })
}