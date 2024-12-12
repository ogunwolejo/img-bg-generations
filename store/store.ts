import {create} from "zustand";
import {immer} from "zustand/middleware/immer"
import {Store} from "@/types/store";
import {createAuthSlice} from "./authSlice"

export const useStore = create<Store>()(immer((...a) => ({
    ...createAuthSlice(...a),
})));
