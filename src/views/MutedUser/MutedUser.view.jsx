import React from 'react'
import { UserList, Modal } from '../../components/organisms'
import MutedUserViewModel from './MutedUser.viewModel'

function MutedUser() {
  const viewModel = MutedUserViewModel()

  return (
    <div>
      {
        viewModel.mutedUsers.map(user => (
          <UserList 
            Name={user.name}
            handleBlockClick={viewModel.handleBlockModal}
            handleMuteClick={viewModel.handleMuteModal}
            isExpand={viewModel.isExpand}
            isUserMuted={user.mute_status}
            Status="Muted"
            key={user.id}
            />
        ))
      }
      {
        viewModel.isMuteModalClicked && (
          <Modal
            Message="Buka Mute User?"
            confirmationMessage="Apakah Kamu Yakin Akan Membuka Mute User Ini?"
            proceedMessage="Buka Mute"
            cancelMessage="Batal"
            handleCancel={viewModel.handleMuteModal}
            idProceedButton="unmute-user"
            idCancelButton="batal"
          />
        )
      }

      {
        viewModel.isBlockModalClicked && (
          <Modal
            Message="Blokir User?"
            confirmationMessage="Apakah Kamu Yakin Akan Memblokir User Ini?"
            proceedMessage="Blokir"
            cancelMessage="Batal"
            handleCancel={viewModel.handleBlockModal}
            idProceedButton="block-user"
            idCancelButton="batal"
          />
        )
      }
    </div>
  )
}
export default MutedUser