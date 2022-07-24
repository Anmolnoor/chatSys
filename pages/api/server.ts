// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createServer } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Server } from "socket.io";

type Data = {
  // name:;
};

const ioHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // console.log({ res });

  // const server = createServer();

  // if (!res.socket.server.io) {
  console.log("*First use, starting socket.io");

  const io = new Server(3000);

  io.on("connection", (socket) => {
    console.log("we have a new connection ");

    socket.on("join", ({ name, room }) => {
      console.log({ room, name });
    });

    socket.on("hello", (msg) => {
      socket.emit("hello", "world!");
    });

    socket.on("disconnect", () => console.log("User disconnected"));
  });

  // res.socket.server.io = io;
  // } else {
  // console.log("socket.io already running");
  // }
  res.end();
};

export const config = {
  api: {
    bodyParser: false
  }
};

export default ioHandler;
