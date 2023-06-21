import React from 'react'
import { LihatThread, LihatThreadProfile } from '../../molecules'
import { ReturnButton} from '../../atoms'

function ViewThread(
  {isExpand,}
) {
  return (
    <div className={isExpand ? 'ml-[300px]' : 'ml-[150px]'}>
        <ReturnButton/>
        <LihatThreadProfile/>
        <LihatThread/>
    </div>
  )
}

export default ViewThread