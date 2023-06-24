import React from "react"
import { ThreadProfile } from "../../molecules"


function ThreadList(
  {
    isExpand,
    threadList,
    deletethread,
  }) {
  return (
    <div className={isExpand ? 'gap-[15px] ml-[300px]': 'gap-[15px] ml-[155px]'}>
      <ThreadProfile 
      threadList={threadList}
      isExpand={isExpand}
      deletethread={deletethread}
      />
    </div>
  )
}

export default ThreadList

