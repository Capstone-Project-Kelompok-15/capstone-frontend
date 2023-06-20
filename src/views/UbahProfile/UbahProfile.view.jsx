import React from "react"
import { BackButton, ButtonMasuk, TooltipButton } from "../../components/atoms"
import pp from "../../assets/blank-pp.jpg"
import UbahProfileViewModel from "./UbahProfile.viewModel"
import { Navbar, Sidebar } from "../../components/organisms"
import { useStore } from "../../config/zustand/store"

function UbahProfile() {
    const ubahProfileViewModel = UbahProfileViewModel()
    const isExpand = useStore((state) => state.isExpand)
    const handleExpand = useStore((state) => state.setIsExpand)

    return (
        <div className="bg-[#F8F8F8]" id="ubahProfileView">
            <Navbar ubahNavbar="ubahProfil" />
            <Sidebar expand={isExpand} handleExpand={handleExpand} />
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
                        onSubmit={ubahProfileViewModel.formik.handleSubmit}>
                        <div>
                            <img
                                src={pp}
                                alt=""
                                className="rounded-full w-[127px] mx-auto"
                            />
                            <button
                                className="grid place-content-center mx-auto"
                                type="button">
                                <h3 className="text-xl font-normal text-[#195FAA] pt-[7px]">
                                    Ubah Gambar Profil
                                </h3>
                            </button>
                        </div>

                        <div className="grid pt-4 place-content-center">
                            <label htmlFor="usernameBaru">
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
                                </div>
                            </label>

                            <label className="pt-5" htmlFor="emailBaru">
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
                                </div>
                            </label>

                            <label className="pt-5" htmlFor="passwordBaru">
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
                                </div>
                            </label>
                        </div>
                    </form>
                    <div className="text-center pt-6 pb-[40px]">
                        <ButtonMasuk textButton="simpan" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UbahProfile
