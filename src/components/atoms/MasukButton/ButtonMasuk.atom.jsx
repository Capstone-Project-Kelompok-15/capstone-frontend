import React from "react"

function ButtonMasuk({ textButton, onClick, type, id }) {
    return (
        <button
            className="bg-[#195FAA] py-[8px] px-[32px] text-white rounded-2xl text-base font-black"
            // type={`${type === "submit" ? "submit" : "button"}`}
            type={type === "button" ? "button" : "submit"}
            id={id}
            onClick={onClick}>
            {`${textButton === "simpan" ? "Simpan" : "Masuk"}`}
        </button>
    )
}

export default ButtonMasuk
