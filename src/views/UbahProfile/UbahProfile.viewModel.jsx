import { useFormik } from "formik"
import * as Yup from "yup"
import { useStore } from "../../config/zustand/store"

function UbahProfileViewModel() {
    const {
        setUbahProfil,
        setErrorUbahProfil,
        errorUbahProfil,
        isExpand,
        setIsExpand,
    } = useStore((state) => state)
    const simpanModalState = useStore((state) => state.isSimpanModalClicked)
    const handleSimpan = useStore((state) => state.setIsSimpanModalClicked)

    const username = "admin1"
    const email = "admin@gmail.com"

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            passwordKonfirmasi: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Tolong Masukkan Username"),
            email: Yup.string().required("Tolong Masukkan Email"),
            password: Yup.string().required("Tolong Masukkan Kata Sandi"),
            passwordKonfirmasi: Yup.string().required(
                "Tolong Masukkan Konfirmasi Kata Sandi"
            ),
        }),
        onSubmit: (values) => {
            console.log(values)
            if (values.password === values.passwordKonfirmasi) {
                setUbahProfil(true)
                setErrorUbahProfil(false)
                console.log(values.password)
                alert(JSON.stringify(values, null, 2))
            }
            if (values.password !== values.passwordKonfirmasi) {
                formik.setFieldError(
                    "password",
                    "Kata sandi yang anda masukkan tidak valid"
                )
                formik.setFieldError(
                    "passwordKonfirmasi",
                    "Kata sandi yang anda masukkan tidak valid"
                )
            }
            if (values.username === username) {
                formik.setFieldError("username", "Username sudah digunakan")
            }
            if (values.email === email) {
                formik.setFieldError("email", "Email sudah digunakan")
            }
        },
    })

    const handleStateSimpan = () => {
        handleSimpan()
    }

    const handleSubmit = () => {
        formik.handleSubmit()
        handleStateSimpan()
    }

    console.log("simpan", simpanModalState)
    return {
        formik,
        isExpand,
        setIsExpand,
        errorUbahProfil,
        simpanModalState,
        handleSimpan,
        handleStateSimpan,
        handleSubmit,
    }
}

export default UbahProfileViewModel
