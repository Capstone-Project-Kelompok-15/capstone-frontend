import React from "react"
import { ThreadProfile } from "../../molecules"


function ThreadList(
  {
    isExpand,
  }) {
  return (
    <div className={isExpand ? 'gap-[15px] ml-[300px]': 'gap-[15px] ml-[150px]'}>
      <ThreadProfile/>
    </div>
  )
}

export default ThreadList
