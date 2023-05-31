import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { useStore } from "../../config/zustand/store";

const LoginViewModel = () => {
	const navigate = useNavigate();
	const isLogin = useStore((state) => state.isLogin);
	const setLogin = useStore((state) => state.setLogin);

	const [errorLogin, setErrorLogin] = useState(false);

	const email = "admin@yahoo.com";
	const password = "admin";

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().required(),
			password: Yup.string().required(),
		}),
		onSubmit: (values) => {
			console.log(values);
			if (values.email === email && values.password === password) {
				setLogin(true);
				navigate("/manageuser");
				setErrorLogin(false);
			} else {
				setErrorLogin(true);
				// toast.error("Email atau kata sandi yang anda masukkan salah")
				// setTimeout(() => {
				// 	setErrorLogin(false);
				// }, 1500);
			}

			formik.resetForm();
		},
	});
	if (isLogin) {
		return <Navigate to="/manageuser" />;
	}
	return {
		formik,
		navigate,
		isLogin,
		setLogin,
		errorLogin,
	};
};
export default LoginViewModel;
