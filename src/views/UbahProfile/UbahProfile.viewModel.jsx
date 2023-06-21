import { useFormik } from "formik"
import * as Yup from "yup"
import { useStore } from "../../config/zustand/store"

function UbahProfileViewModel() {
    const isExpand = useStore((state) => state.isExpand)

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
        onsubmit: (values) => {
            console.log(values)

            if (values.password === values.passwordKonfirmasi) {
                console.log(values.password)
            } else if ((values.password = !values.passwordKonfirmasi)) {
                formik.setFieldError(
                    "passwordBaru",
                    "Kata sandi yang anda masukkan tidak valid"
                )
                formik.setFieldError(
                    "passwordKonfirmasi",
                    "Kata sandi yang anda masukkan tidak valid"
                )
            } else if (values.username === username) {
                formik.setFieldError("usernameBaru", "Username sudah digunakan")
            } else {
                formik.setFieldError(
                    "emailBaru",
                    "Email yang anda masukkan tidak valid"
                )
            }
        },
    })
    return {
        formik,
        isExpand,
    }
}

export default UbahProfileViewModel
