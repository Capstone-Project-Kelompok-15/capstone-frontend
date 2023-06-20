import React, { useEffect } from 'react'
import { UserList, Modal } from '../../components/organisms'
import TotalUserViewModel from './TotalUser.viewModel'

function TotalUser() {
    const viewModel = TotalUserViewModel()

    useEffect(() => {
        viewModel.fetchUsers(viewModel.accessToken)
    }, [])

    return (
        <div>
            <UserList Name="John Doe" Status="Aman" isUserBlocked={false} isUserMuted={false}
                handleBlockClick={viewModel.handleBlock}
                handleMuteClick={viewModel.handleMute} />

            {
                viewModel.blockModalState && (
                    <Modal
                        Message="Blokir User?"
                        confirmationMessage="Apakah Kamu Yakin Akan Memblokir User Ini?"
                        proceedMessage="Blokir"
                        cancelMessage="Batal"
                        muteModal={false}
                        handleCancel={viewModel.handleBlock}

                        idProceedButton="block-user"
                        idCancelButton="batal"
                    />
                )
            }

            {
                viewModel.muteModalState && (
                    <Modal
                        formik={viewModel.formik}
                        muteModal
                        Message="Mute User?"

                        radioName="mute_duration"
                        valueRadio1={1}
                        idRadio1="1Hari"
                        radioMessage1="Mute 1 Hari"

                        valueRadio2={7}
                        idRadio2="7Hari"
                        radioMessage2="Mute 7 Hari"

                        valueRadio3={30}
                        idRadio3="30Hari"
                        radioMessage3="Mute 1 Bulan"

                        valueRadio4={365}
                        idRadio4="365Hari"
                        radioMessage4="Mute 1 Tahun"

                        confirmationMessage="Apakah Kamu Yakin Akan Mute User Ini?"
                        proceedMessage="Mute"
                        cancelMessage="Batal"
                        handleCancel={viewModel.handleMute}

                        idProceedButton="mute-user"
                        idCancelButton="batal"

                    />
                )
            }


        </div>
    )
}

export default TotalUser