import React from "react";
import ButtonMasuk from "../../atoms/MasukButton/ButtonMasuk.atom";

/**
 * Tambahin formik
 */
function FormLogin() {
	return (
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
				<form>
					<div>
						<label className="text-xl font-normal text-[#2C2C2C]">
							Alamat Email
						</label>
						<div className="pt-3">
							<input
								type="email"
								className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] py-2 px-4"
							/>
						</div>
					</div>
					<div className="pt-8">
						<label className="text-xl font-normal text-[#2C2C2C]">Kata Sandi</label>
						<div className="pt-3">
							<input
								type="password"
								className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] py-2 px-4"
							/>
						</div>
					</div>
					<div className="text-center pt-[46px]">
						<ButtonMasuk />
					</div>
				</form>
			</div>
		</div>
	);
}

export default FormLogin;
