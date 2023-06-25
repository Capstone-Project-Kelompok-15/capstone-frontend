import React from "react"
import Trash from "../../../assets/Trash1.svg"

function DeleteButton({ handleClick }) {
    return (
        <div className="w-[60px] h-[69px]">
            <button
                id="buttonhapus"
                className="btn"
                type="button"
                onClick={handleClick}>
                <img
                    src={Trash}
                    alt="Trash Logo"
                    id="TrashLogo"
                    className="ml-[24px] mt-[6px] mb-[8px]"
                />
                <p className="w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]">
                    {" "}
                    Hapus Thread{" "}
                </p>
            </button>
        </div>
    )
}

export default DeleteButton
