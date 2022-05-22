import Head from 'next/head';
import Button from '../components/Button';
import SignUpForm from '../components/SignUpForm';
import useDwitter from '../hooks/useDwitter';

import { useState } from 'react';

export default function Home() {
  const { connect, account, user, createUser,postDweet,dweets} = useDwitter();
  const [dweetContent, setDweetContent] = useState<string>('');

  return (
    <div className="cursor-pointer flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dwitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20">
        <h1 className="mb-8">
          <span className="opacity-80 drop-shadow-2xl font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Dwitter </span>
        </h1>

        {!account ? (
          <Button label="Connect with Ethereum" onClick={connect} />
        ) : account.toUpperCase() !== user?.wallet.toUpperCase() ? (
          <SignUpForm createUser={createUser} />
        ) : (
          <>
          <div className="flex items-center w-80">
            <img src={user?.avatar} className='rounded-lg h-16 w-16 mr-4' />
            <textarea className='rounded-xl ml-4 w-64' placeholder="What's happening?" value={dweetContent} onChange={e=>setDweetContent(e.target.value)}/>
          </div>
          <div className="my-5 drop-shadow-lg mt-2 flex justify-end w-72">
          <Button label="Dweet" onClick={()=>postDweet(dweetContent)} />
          </div>
          </>
        )}
        {dweets.map(dweet=>(
          <span className='opacity-90 text-white drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg w-64 my-2 py-1.5 px-3'>
            {dweet.content}
          </span>
        ))}
      </main>

      <footer className="opacity-40 text-2xl flex h-24 w-full items-center justify-center">
        Made By Rachit Gupta
      </footer>
    </div>
  );
}
