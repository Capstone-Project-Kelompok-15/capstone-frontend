import React from "react"
import { ButtonMasuk, Logo } from "../../components/atoms"
import { Footer } from "../../components/molecules"
import LoginViewModel from "./Login.viewModel"

function Login() {
    const loginViewModel = LoginViewModel()
    
    return (
        <div id="loginView">
            <div className="flex py-[17px] px-[80px] justify-between items-center">
                <Logo textLogo="black" />
            </div>
            {/* FormLogin */}
            <div className="pt-14">
                {/* Selamat Datang */}
                <div className="text-center">
                    <h1 className="text-5xl font-semibold  text-[#2C2C2C]">
                        Selamat Datang Di Squad Space Centre
                    </h1>
                    <h3 className="text-xl font-normal  text-[#2C2C2C] pt-2">
                        Silahkan Login Untuk Mengatur Konten
                    </h3>
                </div>
                {/* Form Login */}
                <div className="grid pt-[72px] place-content-center">
                    <form
                        id="loginForm"
                        onSubmit={loginViewModel.handleSubmit}>
                        <div>
                            <label
                                className="text-xl font-normal text-[#2C2C2C]"
                                htmlFor="email">
                                Alamat Email
                                <div className="pt-3">
                                    <input
                                        type="email"
                                        className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] py-2 px-4"
                                        id="email"
                                        name="email"
                                        onChange={
                                            loginViewModel.formik.handleChange
                                        }
                                        value={
                                            loginViewModel.formik.values.email
                                        }
                                        onBlur={
                                            loginViewModel.formik.handleBlur
                                        }
                                        placeholder="e.g., lesliealexander@gmail.com"
                                    />
                                    <div>
                                        <small className="py-1 text-base font- transition text-slate-400 peer-invalid:text-pink-500">
                                            <span
                                                className="text-[#AA1512]"
                                                id="errorEmail">
                                                {loginViewModel.formik.touched
                                                    .email &&
                                                    loginViewModel.formik.errors
                                                        .email}
                                                {/* ? "Tolong masukkan email"
												: ""} */}
                                                {/* {loginViewModel.errorLogin && "Email yang anda masukkan salah"}
											{console.log(loginViewModel.formik.errors)} */}
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="pt-8">
                            <label
                                className="text-xl font-normal text-[#2C2C2C]"
                                htmlFor="password">
                                Kata Sandi
                                <div className="pt-3">
                                    <input
                                        type="password"
                                        className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] py-2 px-4"
                                        id="password"
                                        name="password"
                                        onChange={
                                            loginViewModel.formik.handleChange
                                        }
                                        value={
                                            loginViewModel.formik.values
                                                .password
                                        }
                                        onBlur={
                                            loginViewModel.formik.handleBlur
                                        }
                                    />
                                    <div>
                                        <small className="py-1 text-base transition border-[#AA1512] text-slate-400 peer-invalid:text-pink-500">
                                            <span
                                                className="text-[#AA1512]"
                                                id="errorPassword">
                                                {loginViewModel.formik.touched
                                                    .password &&
                                                    loginViewModel.formik.errors
                                                        .password}
                                                {/* ? "Tolong masukkan kata sandi"
												: ""}
											{loginViewModel.errorLogin && "Kata sandi yang anda masukkan salah"} */}
                                            </span>
                                        </small>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="text-center pt-[46px] ">
                            <ButtonMasuk />
                        </div>
                    </form>
                </div>
            </div>

            <div className="pt-7">
                <Footer textColor="black" />
            </div>
        </div>
    )
}

export default Login
