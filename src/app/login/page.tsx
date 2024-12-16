'use client';

import { useRouter } from 'next/navigation';
import * as S from 'app/page.styled';

export default function Login() {
  const { push } = useRouter();

  return (
    <>
      <S.MainContent className="flex flex-col min-h-screen space-y-32">
        <div id="loginHeader" className="font-semibold text-center">
          <h1 className="text-orange-900 text-2xl">AKCSE MANITOBA</h1>
          <h1 className="text-orange-900 text-base">Young Generations</h1>
        </div>

        <div id="loginMain" className="space-y-7 font-mono">
          <div id="loginTitle" className="text-left space-y-1">
            <h1 className="text-orange- 900 text-xl">Log In</h1>
            <h1 className="text-gray-600 text-base">AKCSE MB Admin Access</h1>
          </div>

          <div id="textInput" className=" text-xl rounded space-y-3">
            <input
              type="text"
              placeholder="Email"
              className="border-2 h-12 p-3"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="border-2 h-12 p-3"
            />
          </div>

          <div id="buttonInput" className="flex justify-end">
            <button
              className="bg-orange-900 hover:bg-orange-800 text-white py-2 px-4 rounded"
              onClick={() => push('/')}
            >
              Log In
            </button>
          </div>
        </div>
      </S.MainContent>
    </>
  );
}
