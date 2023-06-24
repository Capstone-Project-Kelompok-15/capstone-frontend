import React from 'react'
import { LihatThread, LihatThreadProfile } from '../../molecules'
import { ReturnButton} from '../../atoms'

function ViewThread(
  {isExpand,
  threadList,}
) {
  return (
    <div className={isExpand ? 'ml-[300px]' : 'ml-[150px]'}>
        <ReturnButton/>
        <LihatThreadProfile/>
        <LihatThread 
        threadList={threadList}
        isExpand={isExpand}/>
    </div>
  )
}

export default ViewThread