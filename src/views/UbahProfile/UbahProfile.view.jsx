import React from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../config/zustand/store"
import { BackButton, ButtonMasuk } from "../../components/atoms"
import UbahProfileViewModel from "./UbahProfile.viewModel"
import { Modal, Navbar, Sidebar } from "../../components/organisms"

function UbahProfile() {
    const ubahProfileViewModel = UbahProfileViewModel()
    const { isKeluarModalClicked, setIsKeluarModalClicked, logout } = useStore(
        (state) => state
    )
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        setIsKeluarModalClicked()
        navigate("/landing")
    }

    return (
        <div className="bg-[#F8F8F8] min-h-screen" id="ubahProfileView">
            <Navbar
                ubahNavbar="ubahProfil"
                onClick={() => {
                    setIsKeluarModalClicked()
                }}
            />
            {isKeluarModalClicked && (
                <Modal
                    Message="Keluar?"
                    confirmationMessage="Apakah Kamu Yakin Akan Keluar?"
                    proceedMessage="Keluar"
                    cancelMessage="Batal"
                    handleCancel={() => setIsKeluarModalClicked()}
                    handleProceed={() => handleLogout()}
                    idProceedButton="keluar"
                    idCancelButton="batal"
                />
            )}

            <Sidebar
                expand={ubahProfileViewModel.isExpand}
                handleExpand={ubahProfileViewModel.setIsExpand}
            />

            <div
                className={` transition-all duration-300 ${
                    ubahProfileViewModel.isExpand ? "ml-[150px]" : ""
                }`}>
                <BackButton />
            </div>
            <div
                className={`pt-[11.59px] transition-all duration-300 ${
                    ubahProfileViewModel.isExpand ? "ml-[300px]" : "ml-[150px]"
                }`}>
                <div>
                    <form
                        id="ubahProfileForm"
                        // onSubmit={ubahProfileViewModel.handleSubmit}
                    >
                        <div>
                            <img
                                src={
                                    ubahProfileViewModel.images[
                                        ubahProfileViewModel.imageIndex
                                    ]
                                }
                                alt="image"
                                id="gambarprofil"
                                className="rounded-full w-[127px] mx-auto"
                            />
                            <button
                                className="grid place-content-center mx-auto"
                                type="button"
                                onClick={ubahProfileViewModel.handleImage}>
                                <h3 className="text-xl font-normal text-[#195FAA] pt-[7px]">
                                    Ubah Gambar Profil
                                </h3>
                            </button>
                        </div>
                        <div className="grid pt-4 place-content-center">
                            <label htmlFor="username">
                                Username Baru
                                <div>
                                    <input
                                        className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="e.g., admin1"
                                        onChange={
                                            ubahProfileViewModel.formik
                                                .handleChange
                                        }
                                        value={
                                            ubahProfileViewModel.formik.values
                                                .username
                                        }
                                        onBlur={
                                            ubahProfileViewModel.formik
                                                .handleBlur
                                        }
                                    />
                                    <div>
                                        <small className="py-1 text-base font- transition text-slate-400 peer-invalid:text-pink-500">
                                            <span
                                                className="text-[#AA1512]"
                                                id="errorUsername">
                                                {ubahProfileViewModel.formik
                                                    .touched.username &&
                                                    ubahProfileViewModel.formik
                                                        .errors.username}
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </label>

                            <label className="pt-5" htmlFor="email">
                                Alamat Email Baru
                                <div>
                                    <input
                                        className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="e.g., leslialexander@gmail.com"
                                        onChange={
                                            ubahProfileViewModel.formik
                                                .handleChange
                                        }
                                        value={
                                            ubahProfileViewModel.formik.values
                                                .email
                                        }
                                        onBlur={
                                            ubahProfileViewModel.formik
                                                .handleBlur
                                        }
                                    />
                                    <div>
                                        <small className="py-1 text-base font- transition text-slate-400 peer-invalid:text-pink-500">
                                            <span
                                                className="text-[#AA1512]"
                                                id="errorEmail">
                                                {ubahProfileViewModel.formik
                                                    .touched.email &&
                                                    ubahProfileViewModel.formik
                                                        .errors.email}
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </label>

                            <label className="pt-5" htmlFor="password">
                                Kata Sandi Baru
                                <div>
                                    <input
                                        className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={
                                            ubahProfileViewModel.formik
                                                .handleChange
                                        }
                                        value={
                                            ubahProfileViewModel.formik.values
                                                .password
                                        }
                                        onBlur={
                                            ubahProfileViewModel.formik
                                                .handleBlur
                                        }
                                    />
                                    <div>
                                        <small className="py-1 text-base font- transition text-slate-400 peer-invalid:text-pink-500">
                                            <span
                                                className="text-[#AA1512]"
                                                id="errorPassword">
                                                {ubahProfileViewModel.formik
                                                    .touched.password &&
                                                    ubahProfileViewModel.formik
                                                        .errors.password}
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </label>

                            <label
                                className="pt-5"
                                htmlFor="passwordKonfirmasi">
                                Konfirmasi Kata Sandi Baru
                                <div>
                                    <input
                                        className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
                                        type="password"
                                        name="passwordKonfirmasi"
                                        id="passwordKonfirmasi"
                                        onChange={
                                            ubahProfileViewModel.formik
                                                .handleChange
                                        }
                                        value={
                                            ubahProfileViewModel.formik.values
                                                .passwordKonfirmasi
                                        }
                                        onBlur={
                                            ubahProfileViewModel.formik
                                                .handleBlur
                                        }
                                    />
                                    <div>
                                        <small className="py-1 text-base font- transition text-slate-400 peer-invalid:text-pink-500">
                                            <span
                                                className="text-[#AA1512]"
                                                id="errorPasswordKonfirmasi">
                                                {ubahProfileViewModel.formik
                                                    .touched
                                                    .passwordKonfirmasi &&
                                                    ubahProfileViewModel.formik
                                                        .errors
                                                        .passwordKonfirmasi}
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <div className="text-center pt-6 pb-[40px]">
                                <div>
                                    <ButtonMasuk
                                        textButton="simpan"
                                        onClick={(e) => {
                                            e.preventDefault(),
                                                ubahProfileViewModel.handleSimpan()
                                        }}
                                    />
                                </div>
                                {ubahProfileViewModel.simpanModalState && (
                                    <Modal
                                        Message="Simpan?"
                                        confirmationMessage="Apakah Kamu Yakin Akan melakukan perubahan data?"
                                        proceedMessage="Simpan"
                                        cancelMessage="Batal"
                                        handleCancel={
                                            ubahProfileViewModel.handleStateSimpan
                                        }
                                        handleProceed={(e) => {
                                            e.preventDefault(),
                                                ubahProfileViewModel.handleSubmit()
                                        }}
                                        idProceedButton="simpan"
                                        idCancelButton="batal"
                                        textBlue
                                    />
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UbahProfile
