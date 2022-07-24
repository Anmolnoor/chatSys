import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <Fragment>
      <div className='w-[100vw] h-[100vh] flex justify-between flex-col bg-[#333]'>
        <Head>
          <title>💬 Chat App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className=''>{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
