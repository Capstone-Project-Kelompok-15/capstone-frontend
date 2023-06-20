import React from "react"
import { KeluarButton } from "../../components/atoms"
import KeluarButtonModel from "./KeluarButton.viewModel"

function KeluarButtonView() {
    const keluarButtonModel = KeluarButtonModel()
    return (
        <div>
            <KeluarButton />
            {keluarButtonModel.keluarModalState && (
                <Modal
                    Message="Blokir User?"
                    confirmationMessage="Apakah Kamu Yakin Akan Memblokir User Ini?"
                    proceedMessage="Blokir"
                    cancelMessage="Batal"
                    handleCancel={keluarButtonModel.handleKeluar}
                    idProceedButton="block-user"
                    idCancelButton="batal"
                />
            )}
        </div>
    )
}

export default KeluarButtonView
