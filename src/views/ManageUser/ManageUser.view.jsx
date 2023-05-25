import React from 'react'
import { SearchBar } from '../../components/molecules'
import { UserStats } from '../../components/organisms'

function ManageUser() {
  return (
    <div>
      <UserStats />
      <SearchBar />
    </div>
  )
}

export default ManageUser