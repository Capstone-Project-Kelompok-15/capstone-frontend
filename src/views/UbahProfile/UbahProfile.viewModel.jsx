import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useStore } from "../../config/zustand/store"
import pp1 from "../../assets/pp1.png"
import pp2 from "../../assets/pp2.png"
import pp3 from "../../assets/pp3.png"

function UbahProfileViewModel() {
    const {
        setUbahProfil,
        setErrorUbahProfil,
        errorUbahProfil,
        isExpand,
        setIsExpand,
        ubahProfileAdmin,
        dataAdmin,
        accessToken,
        logout,
        imageIndex,
        setImageIndex,
        isKeluarModalClicked,
        setIsKeluarModalClicked,
    } = useStore((state) => state)
    const simpanModalState = useStore((state) => state.isSimpanModalClicked)
    const handleSimpan = useStore((state) => state.setIsSimpanModalClicked)

    const images = [pp1, pp2, pp3]

    const navigate = useNavigate()

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
        onSubmit: async (values) => {
            console.log(values)
            if (values.username === dataAdmin.name) {
                formik.setFieldError("username", "Username sudah digunakan")
            }
            if (values.email === dataAdmin.email) {
                formik.setFieldError("email", "Email sudah digunakan")
            } else if (values.password !== values.passwordKonfirmasi) {
                formik.setFieldError(
                    "password",
                    "Kata sandi yang anda masukkan tidak valid"
                )
                formik.setFieldError(
                    "passwordKonfirmasi",
                    "Kata sandi yang anda masukkan tidak valid"
                )
            } else {
                setUbahProfil(true)
                setErrorUbahProfil(false)
                await ubahProfileAdmin(
                    accessToken,
                    dataAdmin.id,
                    values.username,
                    values.email,
                    values.password
                )
                logout()
                navigate("/landing")
            }
        },
    })

    const handleLogout = () => {
        logout()
        setIsKeluarModalClicked()
        navigate("/landing")
    }

    const handleStateSimpan = () => {
        handleSimpan()
    }

    const handleSubmit = () => {
        formik.handleSubmit()
        handleStateSimpan()
    }

    const handleImage = () => {
        setImageIndex(imageIndex < images.length - 1 ? imageIndex + 1 : 0)
    }

    return {
        formik,
        isExpand,
        setIsExpand,
        errorUbahProfil,
        simpanModalState,
        handleSimpan,
        imageIndex,
        images,
        isKeluarModalClicked,
        setIsKeluarModalClicked,
        handleStateSimpan,
        handleSubmit,
        handleImage,
        handleLogout,
    }
}

export default UbahProfileViewModel
