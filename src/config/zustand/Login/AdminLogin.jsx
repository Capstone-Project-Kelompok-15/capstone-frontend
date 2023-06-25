import axios from "axios";
import { persist } from "zustand/middleware";

export const AdminLogin =
	persist((set) => ({
		isAuthenticated: false,
		accessToken: "",
		fetchLogin: async (email, password) => {
			try {
				const res = await axios.post("http://54.206.29.131:8000/login/admin", {
					email,
					password,
				})
				if (res.status === 200) {
					set({
						isAuthenticated: true,
						accessToken: res.data.Admin.token,
					})
				}
			} catch (error) {
				console.log(error)
			}
		}

	}), {
		name: "user-token"
	})


