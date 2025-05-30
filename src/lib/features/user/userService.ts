import { apiPost } from "$lib/common/apiService";
import type { RegisterRequest } from "./user.requests";

export const register = async (request: RegisterRequest): Promise<void> => {
    await apiPost('/register', request);
}