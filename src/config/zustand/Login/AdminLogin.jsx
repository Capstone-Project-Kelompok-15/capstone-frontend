//API
// import axios from "axios"
// import { persist } from "zustand/middleware"

// export const AdminLogin = persist(
//     (set) => ({
//         isAuthenticated: false,
//         // setIsAuth: (param) => set(() => ({ isAuthenticated: param })),
//         accessToken: "",
//         fetchLogin: async (email, password) => {
//             try {
//                 const res = await axios.post(
//                     "http://54.206.29.131:8000/login/admin",
//                     //    "https://capstone-production-c8c9.up.railway.app/login/admin",
//                     {
//                         email,
//                         password,
//                     }
//                 )
//                 if (res.status === 200) {
//                     set({
//                         isAuthenticated: true,
//                         accessToken: res.data.Admin.token,
//                     })
//                 }
//             } catch (error) {
//                 console.log(error)
//             }
//         },
//         logout: () =>
//             set(() => ({
//                 isAuthenticated: false,
//                 accessToken: "",
//             })),
//     }),
//     {
//         name: "user-token",
//     }
// )

//State
export const AdminLogin = (set) => ({
    isLogin: false,
    setLogin: (state) => set(() => ({ isLogin: state })),
    logout: () =>
        set(() => ({
            isLogin: false,
        })),
})
