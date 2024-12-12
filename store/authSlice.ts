import {StateCreator} from "zustand"

type AuthState = {
    email: string;
    fullName: string;
}

type AuthActions = {
    setAuthState: () => void;
    resetAuthState: () => void;
}

export type AuthSlice = AuthState & AuthActions;
export const createAuthSlice: StateCreator<AuthSlice, [["zustand/immer", never]], [], AuthSlice> = (set) => ({
    email: "",
    fullName: "",
    setAuthState: () => set(() => {}),
    resetAuthState: () => set(() => {}),
})
