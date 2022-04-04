import create from "zustand";
import { login } from "./api/testAPI";


const useStore = create(set => ({
    userInfo: {
        userID: 0,
        username: "Anonymous",
    },

    loginAction: (username, password) => {

        login(username, password).then(response => {
            if (response.data.success) {
                console.log('login success: ', response.data.data);

                const { userID, username } = response.data.data;
                set({
                    userInfo: {
                        userID: userID,
                        username: username,
                    }
                });
            }
        })
    },

    logout: () => set({ userInfo: { userID: 0, username: "" } }),
}))

export default useStore;