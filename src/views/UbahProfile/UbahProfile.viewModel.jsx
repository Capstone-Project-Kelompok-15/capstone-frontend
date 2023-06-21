import { useFormik } from "formik"
import * as Yup from "yup"

function UbahProfileViewModel() {
    const formik = useFormik({
        initialValues: {
            usernameBaru: "",
            emailBaru: "",
            passwordBaru: "",
            passwordKonfirmasi: "",
        },
        validationSchema: Yup.object().shape({
            usernameBaru: Yup.string().required(""),
            emailBaru: Yup.string().required(""),
            passwordBaru: Yup.string().required(""),
            passwordKonfirmasi: Yup.string().required(""),
        }),
        onsubmit: (values) => {
            console.log(values)
        },
    })
    return {
        formik,
    }
}

export default UbahProfileViewModel
