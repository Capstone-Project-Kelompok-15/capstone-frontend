import React from "react"
import { KeluarButton } from "../../components/atoms"
import { Modal } from "../../components/organisms"
import KeluarButtonModel from "./KeluarButton.viewModel"

function KeluarButtonView() {
    const keluarButtonModel = KeluarButtonModel()
    // const keluar = useNavigate("/landing")
    return (
        <div>
            <div onClick={keluarButtonModel.handleKeluar}>
                <KeluarButton />
            </div>
            <div>
                {keluarButtonModel.keluarModalState && (
                    <Modal
                        Message="Keluar?"
                        confirmationMessage="Apakah Kamu Yakin Akan Keluar?"
                        proceedMessage="Keluar"
                        cancelMessage="Batal"
                        handleCancel={keluarButtonModel.handleKeluar}
                        handleProceed={keluarButtonModel.keluarProceed(
                            "/landing"
                        )}
                        idProceedButton="keluar"
                        idCancelButton="batal"
                    />
                )}
            </div>
        </div>
    )
}

export default KeluarButtonView
