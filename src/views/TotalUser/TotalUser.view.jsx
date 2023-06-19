import React from 'react'
import { UserList, Modal } from '../../components/organisms'
import TotalUserViewModel from './TotalUser.viewModel'

function TotalUser() {
    const viewModel = TotalUserViewModel()

    return (
        <div>

            {
                viewModel.totalUsers.map(user => (
                    <UserList
                        Name={user.name}
                        handleBlockClick={viewModel.handleBlockModal}
                        handleMuteClick={viewModel.handleMuteModal}
                        isExpand={viewModel.isExpand}
                        Status="Aman"
                        key={user.id} />
                ))
            }

            {
                viewModel.isBlockModalClicked && (
                    <Modal
                        Message="Blokir User?"
                        confirmationMessage="Apakah Kamu Yakin Akan Memblokir User Ini?"
                        proceedMessage="Blokir"
                        cancelMessage="Batal"
                        muteModal={false}
                        handleCancel={viewModel.handleBlockModal}
                        handleProceed={viewModel.handleBlock}

                        idProceedButton="block-user"
                        idCancelButton="batal"
                    />
                )
            }

            {
                viewModel.isMuteModalClicked && (
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
                        handleCancel={viewModel.handleMuteModal}
                        handleProceed={viewModel.handleMute}

                        idProceedButton="mute-user"
                        idCancelButton="batal"

                    />
                )
            }


        </div>
    )
}

export default TotalUser