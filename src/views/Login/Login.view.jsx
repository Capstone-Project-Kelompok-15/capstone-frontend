import React from "react";
import { ButtonMasuk } from "../../components/atoms";
import { Logo } from "../../components/atoms";
import { Footer } from "../../components/molecules/";
import { Navbar } from "../../components/organisms";
import LoginViewModel from "./Login.viewModel";

function Login() {
	const loginViewModel = LoginViewModel();

	return (
		<div>
			<Navbar />

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
					<form id="loginForm" onSubmit={loginViewModel.formik.handleSubmit}>
						<div>
							<label className="text-xl font-normal text-[#2C2C2C]">
								Alamat Email
							</label>
							<div className="pt-3">
								<input
									type="email"
									className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] py-2 px-4"
									id="email"
									name="email"
									onChange={loginViewModel.formik.handleChange}
									value={loginViewModel.formik.values.email}
								/>
							</div>
						</div>
						<div className="pt-8">
							<label className="text-xl font-normal text-[#2C2C2C]">Kata Sandi</label>
							<div className="pt-3">
								<input
									type="password"
									className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] py-2 px-4"
									id="password"
									name="password"
									onChange={loginViewModel.formik.handleChange}
									value={loginViewModel.formik.values.password}
								/>
							</div>
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
	);
}

export default Login;
