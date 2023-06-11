import React from "react";

function ButtonMasuk({ textButton }) {
	return (
		<button
			className="bg-[#195FAA] py-[8px] px-[32px] text-white rounded-2xl text-base font-black"
			type="submit"
			id="buttonSimpanMasuk">
			{`${textButton === "simpan" ? "Simpan" : "Masuk"}`}
		</button>
	);
}

export default ButtonMasuk;
