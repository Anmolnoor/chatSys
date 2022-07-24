import Link from "next/link";
import React, { useRef } from "react";
import Chat from "../components/chat/Chat";

const chat = () => {
  const msgRef = useRef(null);

  return (
    <div className='flex h-[100vh] flex-col justify-center items-center'>
      <div className='relative w-1/2 h-2/3 rounded-lg overflow-hidden'>
        <div className='bg-blue-500 text-white flex flex-row justify-between items-center p-3'>
          <div className='text-lg'>Title or room Id here</div>
          <Link href='/'>
            <div className='text-lg font-bold cursor-pointer'>X</div>
          </Link>
        </div>
        <div className='text-[#ccc] p-4 pt-8 bg-slate-600 h-full'>
          <Chat />
        </div>
        <div className='absolute bottom-0 left-0 flex flex-row justify-between px-4 py-3 gap-4 bg-[#ddd] items-center w-full'>
          <div className='w-full'>
            <input
              className='w-full pl-2 rounded-md'
              type='text'
              name='msg'
              ref={msgRef}
              placeholder='Message here'
            />
          </div>
          <div className='cursor-pointer hover:text-blue-600'>Send</div>
        </div>
      </div>
    </div>
  );
};

export default chat;
