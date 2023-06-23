import React from "react"

function ButtonMasuk({ textButton, onClick }) {
    return (
        <button
            className="bg-[#195FAA] py-[8px] px-[32px] text-white rounded-2xl text-base font-black"
            type="submit"
            id="buttonSimpanMasuk"
            onClick={onClick}>
            {`${textButton === "simpan" ? "Simpan" : "Masuk"}`}
        </button>
    )
}

export default ButtonMasuk
