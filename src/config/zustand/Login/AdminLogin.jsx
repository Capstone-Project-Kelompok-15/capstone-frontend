import axios from "axios"
import { persist } from "zustand/middleware"

const baseURL = 'https://capstone-production-c8c9.up.railway.app'

export const AdminLogin = persist(
    (set) => ({
        isAuthenticated: false,
        accessToken: "",
        dataAdmin: {},
        fetchLogin: async (email, password) => {
            try {
                const res = await axios.post(
                    `${baseURL}/login/admin`,
                    {
                        email,
                        password,
                    }
                )
                if (res.status === 200) {
                    set({
                        dataAdmin: {
                            id: res.data.user.id,
                            name: res.data.user.name,
                            email: res.data.user.email,
                        },
                        isAuthenticated: true,
                        accessToken: res.data.user.token,
                    })
                }
            } catch (error) {
                console.log(error)
            }
        },
        logout: () =>
            set(() => ({
                dataAdmin: {},
                isAuthenticated: false,
                accessToken: "",
            })),
    }),
    {
        name: "user-token",
        partialize: (state) => ({
            accessToken: state.accessToken,
            isAuthenticated: state.isAuthenticated,
        })
    }
)
