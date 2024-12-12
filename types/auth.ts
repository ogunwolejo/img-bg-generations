export type SignInArgs = {
    password: string;
    email: string;
}

export type AuthResponse = {
    data?: any;
    error?: string;
}

export type SignUpArgs = {
    fullName: string;
    email: string;
    password: string;
}

export type ConfirmationCode = {
    email: string;
    code: string;
}
