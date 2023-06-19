import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../config/zustand/store";

function LoginViewModel() {
	const navigate = useNavigate();

	const { fetchLogin } = useStore((state) => state);
	const isAuthenticated = useStore((state) => state.isAuthenticated);
	const [errorLogin, setErrorLogin] = useState(false);

	// const email = "admin@yahoo.com";
	// const password = "admin";

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().required("Tolong masukkan email"),
			password: Yup.string().required("Tolong masukkan kata sandi"),
		}),
		onSubmit: async (values) => {
			// if (values.email === email && values.password === password) {
			// 	setLogin(true);
			// 	navigate("/manageuser");
			// 	setErrorLogin(false);
			// } else {
			// 	// setErrorLogin(true);
			// 	formik.setFieldError("email", "Email yang anda masukkan salah");
			// 	formik.setFieldError("password", "Kata sandi yang anda masukkan salah");
			// 	// toast.error("Email atau kata sandi yang anda masukkan salah")
			// 	// setTimeout(() => {
			// 	// 	setErrorLogin(false);
			// 	// }, 1500);
			// 	// console.log("error");
			// }

			await fetchLogin(values.email, values.password);



			if (isAuthenticated) {
				navigate("/");
			}
		},
	});

	return {
		formik,
		errorLogin,
		isAuthenticated
	};
}
export default LoginViewModel;
