export const UbahProfile = (set) => ({
    isUbahProfil: false,
    setUbahProfil: (state) => set(() => ({ isUbahProfil: state })),
    errorUbahProfil: false,
    setErrorUbahProfil: (state) => set(() => ({ errorUbahProfil: state })),
})
