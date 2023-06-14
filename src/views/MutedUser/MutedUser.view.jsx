import React from 'react'
import { UserList, Modal } from '../../components/organisms'
import MutedUserViewModel from './MutedUser.viewModel'

function MutedUser() {
  const viewModel = MutedUserViewModel()

  console.log({
    blockState: viewModel.blockModalState,
    muteState: viewModel.muteModalState
  });


  return (
    <div>
      <UserList
        Name='John Doe'
        Status='Muted'
        isUserBlocked={false}
        isUserMuted
        handleBlockClick={viewModel.handleBlock}
        handleMuteClick={viewModel.handleMute}
      />
      {
        viewModel.muteModalState && (
          <Modal
            Message="Buka Mute User?"
            confirmationMessage="Apakah Kamu Yakin Akan Membuka Mute User Ini?"
            proceedMessage="Buka Mute"
            cancelMessage="Batal"
            handleCancel={viewModel.handleMute}
            idProceedButton="unmute-user"
            idCancelButton="batal"
          />
        )
      }

      {
        viewModel.blockModalState && (
          <Modal
            Message="Blokir User?"
            confirmationMessage="Apakah Kamu Yakin Akan Memblokir User Ini?"
            proceedMessage="Blokir"
            cancelMessage="Batal"
            handleCancel={viewModel.handleBlock}
            idProceedButton="block-user"
            idCancelButton="batal"
          />
        )
      }
    </div>
  )
}
export default MutedUser