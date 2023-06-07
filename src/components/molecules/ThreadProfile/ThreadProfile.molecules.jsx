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
            <div>
              <h1>{thread.name}</h1>
              <p>{thread.desc}</p>
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