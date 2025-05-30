export const storageKeys = {
    accessToken: 'tok',
    refreshToken: 'refresh'
}

export class ValidationError {
    type!: string;
    title!: string;
    status!: number;
    errors!: { [key: string]: string[] };
}