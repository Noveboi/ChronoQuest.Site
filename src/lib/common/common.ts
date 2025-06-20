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

export class ApplicationError {
    identifier?: string;
    errorMessage!: string;
    errorCode?: string;
    severity?: number;
}

export const whenApplicationError = (error: unknown, callback: (err: ApplicationError[]) => void) => {
    if (Array.isArray(error) && error.length > 0 && error.every((e) => 'errorMessage' in e)) {
        callback(error);
    }  
}