import create from "zustand";

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