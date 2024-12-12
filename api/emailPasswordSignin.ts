import {SignInArgs, AuthResponse} from "@/types/auth";


const API_ADDRESS = process.env.EXPO_PUBLIC_BACKEND_API;
export const emailPasswordSignIn = async(arg: SignInArgs): Promise<AuthResponse> => {
    try {
        const controller = new AbortController();
        const signal = controller.signal

        const {email, password} = arg;
        let response = await fetch(`${API_ADDRESS}/auth/signin`, {
            body: JSON.stringify({username: email, password}),
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            signal,
        })

        if (!response.ok) {
            throw new Error("Error in logging in")
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
        };
    }
}
