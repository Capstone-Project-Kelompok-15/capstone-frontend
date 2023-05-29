import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { useStore } from "../../config/zustand/store";

const LoginViewModel = () => {
	const navigate = useNavigate();
	const isLogin = useStore((state) => state.isLogin);
	const setLogin = useStore((state) => state.setLogin);

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
			} else alert("Email atau Password SALAH!!!");
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
	};
};
export default LoginViewModel;
