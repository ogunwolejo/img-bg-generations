import {AuthResponse, ConfirmationCode, SignUpArgs} from "@/types/auth";

const API_ADDRESS = process.env.EXPO_PUBLIC_BACKEND_API;

export const newAccountCreation = async (arg: SignUpArgs): Promise<AuthResponse> => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const {password, email, fullName} = arg;
        const response = await fetch(`${API_ADDRESS}/auth/signup`, {
            body: JSON.stringify({
                fullName,
                username: email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            signal,
        });

        if (!response.ok) {
            throw new Error("Error in registering user")
        }
        const responseJson = await response.json();
        return {
            data: responseJson,
        }
    } catch (e) {
        if (e.name === "AbortError") {
            return {
                error: "Request aborted",
            }
        }

        return {
            error: e.toString(),
        }
    }
}


export const confirmingNewAccountViaOtp = async(arg: ConfirmationCode): Promise<AuthResponse> => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const {email, code} = arg;
        const response = await fetch(`${API_ADDRESS}/auth/confirm-signup`, {
            body: JSON.stringify({
                username: email,
                code,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            signal,
        });

        if (!response.ok) {
            throw new Error("Error in sending confirmation code")
        }
        const responseJson = await response.json();
        return {
            data: responseJson,
        }

    } catch (e) {
        if (e.name === "AbortError") {
            return {
                error: "Request aborted",
            }
        }

        return {
            error: e.toString(),
        }
    }
}

