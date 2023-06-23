import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useStore } from "../../config/zustand/store"

function LoginViewModel() {
    // API
    //     const navigate = useNavigate()
    //     const { fetchLogin, isAuthenticated } = useStore((state) => state)
    //     const formik = useFormik({
    //         initialValues: {
    //             name: "Admin 1",
    //             email: "",
    //             password: "",
    //         },
    //         validationSchema: Yup.object().shape({
    //             email: Yup.string().required("Tolong masukkan email"),
    //             password: Yup.string().required("Tolong masukkan kata sandi"),
    //         }),
    //         onSubmit: async (values) => {
    //             await fetchLogin(values.email, values.password)
    //             if (isAuthenticated) {
    //                 navigate("/")
    //             }
    //             if (!isAuthenticated) {
    //                 // setErrorLogin(true);
    //                 formik.setFieldError("email", "Email yang anda masukkan salah")
    //                 formik.setFieldError(
    //                     "password",
    //                     "Kata sandi yang anda masukkan salah"
    //                 )
    //             }
    //         },
    //     })

    //     const handleSubmit = (e) => {
    //         e.preventDefault()
    //         formik.handleSubmit()
    //     }

    //     useEffect(() => {
    //         if (isAuthenticated) {
    //             navigate("/")
    //         }
    //     }, [isAuthenticated])

    //     return {
    //         formik,
    //         navigate,
    //         handleSubmit,
    //     }
    // }

    // State
    const navigate = useNavigate()
    const isLogin = useStore((state) => state.isLogin)
    const setLogin = useStore((state) => state.setLogin)

    // const username = "Admin 1"
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
            if (values.email === email && values.password === password) {
                setLogin(true)
                navigate("/")
                // // setErrorLogin(false)
            } else {
                // setErrorLogin(true);
                formik.setFieldError("email", "Email yang anda masukkan salah")
                formik.setFieldError(
                    "password",
                    "Kata sandi yang anda masukkan salah"
                )
            }
            if (isLogin) {
                navigate("/")
            }

            // formik.resetForm();
        },
    })

    //  useEffect(() => {
    //     if (isLogin) {
    //          navigate("/")
    //     }
    // }, [isLogin])

    const handleSubmit = (e) => {
        e.preventDefault()
        formik.handleSubmit()
    }

    return {
        formik,
        navigate,
        isLogin,
        setLogin,
        handleSubmit,
    }
}
export default LoginViewModel
