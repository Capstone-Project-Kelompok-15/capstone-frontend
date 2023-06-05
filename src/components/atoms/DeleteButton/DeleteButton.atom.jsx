import React from "react"
import Trash from "../../../assets/Trash1.svg"

function DeleteButton() {
    return (
        <div>
            <a
                href=""
                className="btn grid w-12 justify-items-center mx-3"
                id="buttonhapus">
                <img src={Trash} alt="Trash Logo" id="TrashLogo" />
                <p className="text-center">
                    {" "}
                    Hapus <br /> Thread{" "}
                </p>
            </a>
        </div>
    )
}

export default DeleteButton
