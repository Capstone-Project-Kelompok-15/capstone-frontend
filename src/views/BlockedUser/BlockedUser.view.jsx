import React from 'react'
import { Modal, UserList } from '../../components/organisms'
import BlockUserViewModel from './BlockedUser.viewModel'

function BlockedUser() {
    const viewModel = BlockUserViewModel()

    console.log({
        blockState: viewModel.blockModalState,
        muteState: viewModel.muteModalState
    });

    return (
        <div>
            <UserList
                Name='John Doe'
                Status='Terblokir'
                isUserBlocked
                isUserMuted={false}
                handleBlockClick={viewModel.handleBlock}
                handleMuteClick={viewModel.handleMute}
            />

            {
                viewModel.blockModalState && (
                    <Modal
                        Message="Buka Blokir User?"
                        confirmationMessage="Apakah Kamu Yakin Akan Membuka Blokir User Ini?"
                        proceedMessage="Buka Blokir"
                        cancelMessage="Batal"
                        muteModal={false}
                        handleCancel={viewModel.handleBlock} />
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

                    />
                )
            }

        </div>
    )
}
export default BlockedUser