export const AdminLogin = (set) => ({
	isLogin: false,
	setLogin: (state) => set(() => ({ isLogin: state })),
});
