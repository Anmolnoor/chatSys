import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import io from "socket.io-client";

const ENDPOINT = "localhost:3000";
const Join = () => {
  // const data = axios({
  //   method: "get",
  //   url: "/api/server"
  // })
  //   .then((d) => d)
  //   .then((d) => {
  //     d;
  //     console.log({ e: 1, data: d.data.name });
  //   })
  //   .catch((e) => {
  //     e;
  //     console.log({ e });
  //   });

  const socket = io(ENDPOINT);

  console.log({ socket });

  const name = useRef(null);
  const room = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!name && !room) {
      socket.emit("join", { name, room });
    }
  }, []);

  const InputBar = (
    Reference: React.LegacyRef<HTMLInputElement> | undefined,
    placeHolder: string
  ) => (
    <input
      className='border-none p-4 rounded-lg w-2/3'
      type='text'
      placeholder={placeHolder}
      ref={Reference}
      name='name'
    />
  );

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col gap-4 items-center justify-center bg-slate-600 w-1/5 h-2/5 rounded-3xl'>
        <div className='text-slate-100 text-3xl font-bold'>Log In </div>
        {InputBar(name, "Enter the user Name")}
        {InputBar(room, "Enter the room ID")}
        <Link href='/chat'>
          <div className='py-3 w-2/3 text-center rounded-lg font-bold text-white bg-blue-500 cursor-pointer'>
            Sign-in
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Join;
