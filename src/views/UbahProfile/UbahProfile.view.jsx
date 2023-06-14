import React from "react";
import { BackButton, ButtonMasuk } from "../../components/atoms";
import pp from "../../assets/blank-pp.jpg";

function UbahProfile() {
	return (
		<div className="bg-[#F8F8F8]">
			<BackButton />
			<div className="pt-[11.59px] ml-[153px]">
				<div>
					<form>
						<div>
							<img src={pp} alt="" className="rounded-full w-[127px] mx-auto" />
							<button className="grid place-content-center mx-auto" type="button">
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
										name="usernameBaru"
										id="usernameBaru"
									/>
								</div>
							</label>

							<label className="pt-5" htmlFor="emailBaru">
								Alamat Email Baru
								<div>
									<input
										className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
										type="email"
										name="emailBaru"
										id="emailBaru"
									/>
								</div>
							</label>

							<label className="pt-5" htmlFor="passwordBaru">
								Kata Sandi Baru
								<div>
									<input
										className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
										type="password"
										name="passwordBaru"
										id="passwordBaru"
									/>
								</div>
							</label>

							<label className="pt-5" htmlFor="passwordKonfirmasi">
								Konfirmasi Kata Sandi Baru
								<div>
									<input
										className="border-[#BFBFBF80]/50 rounded-xl border-2 w-[509px] h-11 py-2 px-4 "
										type="password"
										name="passwordKonfirmasi"
										id="passwordKonfirmasi"
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
	);
}

export default UbahProfile;
