import axios from "axios";

export const AdminLogin = (set) => ({
	isAuthenticated: false,
	fetchLogin: async (email, password) => {
		try {
			const res = await axios.post("http://54.206.29.131:8000/login/admin", {
				email,
				password,
			})
			if (res.status === 200) {
				const accessToken = res.data.Admin.token
				sessionStorage.setItem("accessToken", accessToken)

				set({ isAuthenticated: true })
			}
		} catch (error) {
			console.log(error)
		}
	}

});
