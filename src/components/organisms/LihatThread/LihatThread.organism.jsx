import React from 'react'
import { LihatThread, LihatThreadProfile } from '../../molecules'
import { ReturnButton} from '../../atoms'

function ViewThread() {
  return (
    <div>
        <ReturnButton/>
        <LihatThreadProfile/>
        <LihatThread/>
    </div>
  )
}

export default ViewThread