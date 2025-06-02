// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Backend } from "$lib/common/backend";
import type { User } from "$lib/features/user/user.types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
