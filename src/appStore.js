import create from "zustand";


const useStore = create(set => ({
    userInfo: {
        username: "",
        password: "",
    },

    login: (username, password) => set({userInfo: {
        username: username,
        password: password,
    }}),

    logout: () => set({userInfo: {username: "", password: ""}}),
}))

export default useStore;