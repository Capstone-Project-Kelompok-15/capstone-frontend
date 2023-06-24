import axios from "axios"

export const UbahProfile = (set) => ({
    isUbahProfil: false,
    setUbahProfil: (state) => set(() => ({ isUbahProfil: state })),
    errorUbahProfil: false,
    setErrorUbahProfil: (state) => set(() => ({ errorUbahProfil: state })),
    ubahProfileAdmin: async (token, id, username, email, password) => {
        try {
            await axios.put(
                `https://capstone-production-c8c9.up.railway.app/admin/${id}`,
                {
                    username,
                    email,
                    password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            alert("Berhasil ubah profile, mohon login kembali")
        } catch (error) {
            console.log(error)
        }
    },
    imageIndex: 0,
    setImageIndex: (state) => set(() => ({ imageIndex: state })),
})
