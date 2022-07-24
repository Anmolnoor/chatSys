import React from "react";

const Chat = () => {
  const leftRender = () => (
    <div className='flex flex-col justify-start items-start'>
      <div className='relative p-2 bg-gray-700 w-2/3 rounded-lg text-slate-300 '>
        left render
        <div className='absolute top-[-22px] right-2'>sender</div>
      </div>
    </div>
  );

  const rightRender = () => (
    <div className='flex flex-col justify-end items-end'>
      <div className='relative p-2 bg-gray-700 w-2/3 rounded-lg text-slate-300 '>
        right render
        <div className='absolute top-[-22px] left-2'>sender</div>
      </div>
    </div>
  );

  return (
    <div className='flex flex-col gap-8'>
      {leftRender()}
      {rightRender()}
    </div>
  );
};

export default Chat;
