import create from "zustand";
import { login } from "./api/authenAPI";


const useStore = create(set => ({
    userInfo: {
        userID: 0,
        username: "Anonymous",
    },

    loginAction: (userID, username) =>
        set({
            userInfo: {
                userID: userID,
                username: username,
            }
        }),
    logout: () => set({ userInfo: { userID: 0, username: "" } }),
}))

export default useStore;