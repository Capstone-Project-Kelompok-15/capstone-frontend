import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Navigate, useNavigate } from "react-router-dom"
import { useStore } from "../../config/zustand/store"
import { useEffect } from "react"

function LoginViewModel() {
    const navigate = useNavigate()
    const isLogin = useStore((state) => state.isLogin)
    const setLogin = useStore((state) => state.setLogin)

    const username = "Admin 1"
    const email = "admin@yahoo.com"
    const password = "admin"

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required("Tolong masukkan email"),
            password: Yup.string().required("Tolong masukkan kata sandi"),
        }),
        onSubmit: (values) => {
            if (values.email !== email && values.password !== password) {
                // setLogin(true)
                // navigate("/")
                // // setErrorLogin(false)
            // } else {
                // setErrorLogin(true);
                formik.setFieldError("email", "Email yang anda masukkan salah")
                formik.setFieldError(
                    "password",
                    "Kata sandi yang anda masukkan salah"
                )
                // toast.error("Email atau kata sandi yang anda masukkan salah")
                // setTimeout(() => {
                // 	setErrorLogin(false);
                // }, 1500);
                // console.log("error");
            }
            setLogin(true)
            navigate('/')
            

            // formik.resetForm();
        },
    })
    if (isLogin) {
        return navigate('/')
    }

     useEffect(() => {
        if (isLogin) {
             navigate("/")
        }
    }, [isLogin])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        formik.handleSubmit()
    }
   
    return {
        formik,
        navigate,
        isLogin,
        setLogin,
        handleSubmit
    }
}
export default LoginViewModel
