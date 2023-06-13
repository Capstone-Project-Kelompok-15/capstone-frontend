import React from 'react';
import { DeleteButton, ThreadPicture, ViewButton } from '../../atoms';
import threads from '../../../dummyData/ThreadList';

function ThreadProfile() {
  return (
    <div>
      {threads.map(thread => (
        <div className='flex justify-between mt-4' key={thread.id}>
          <div className='flex'>
            <ThreadPicture />
            <div className='mt-[10px] ml-[15px]'>
              <h1 className='font-source-sans font-bold text-[12px]'>{thread.name}</h1>
              <p className='font-source-sans font-normal text-[12px]'>{thread.desc}</p>
            </div>
          </div>
          <div className='flex'>
            <ViewButton />
            <DeleteButton />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThreadProfile;
