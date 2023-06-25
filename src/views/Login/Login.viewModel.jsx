import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useStore } from "../../config/zustand/store"

function LoginViewModel() {
    // API
    const navigate = useNavigate()
    const { fetchLogin, isAuthenticated } = useStore((state) => state)
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
            await fetchLogin(values.email, values.password)
            console.log(values.email, values.password)
            if (isAuthenticated) {
                navigate("/")
            }
            if (!isAuthenticated) {
                // setErrorLogin(true);
                formik.setFieldError("email", "Email yang anda masukkan salah")
                formik.setFieldError(
                    "password",
                    "Kata sandi yang anda masukkan salah"
                )
            }
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        formik.handleSubmit()
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated])

    return {
        formik,
        navigate,
        handleSubmit,
    }
}
export default LoginViewModel
