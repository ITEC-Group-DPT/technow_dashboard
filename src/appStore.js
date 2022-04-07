import create from "zustand";
import { login } from "./api/authenAPI";


const useStore = create(set => ({
    userInfo: null,

    loginAction: (username) =>
        set({
            userInfo: {
                username: username,
            }
        }),
    logoutAction: () => set({ userInfo: { username: null} }),
}))

export default useStore;