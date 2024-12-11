'use client';

//import { useRouter } from 'next/navigation';
import * as S from 'app/page.styled';

export default function Login() {
  //const router = useRouter();

  return (
    <>
      <S.MainContent className="flex flex-col min-h-screen space-y-32">
        <div id="loginHeader" className="font-semibold text-center">
          <h1 className="text-orange-950 text-2xl">AKCSE MANITOBA</h1>
          <h1 className="text-orange-950 text-base">Young Generations</h1>
        </div>

        <div id="loginMain" className="space-y-7 font-mono">
          <div id="loginTitle" className="text-left ml-5 space-y-1">
            <h1 className="text-orange- 950 text-xl">Log In</h1>
            <h1 className="text-gray-600 text-base">AKCSE MB Admin Access</h1>
          </div>

          <div id="textInput" className="mx-5 text-xl rounded space-y-3">
            <input
              type="text"
              placeholder="Email"
              className="border-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 rounded"
            />
          </div>

          <div id="buttonInput" className="flex justify-end">
            <button className="bg-orange-950 hover:bg-orange-800 text-white py-2 px-4 rounded">
              Log In
            </button>
          </div>
        </div>
      </S.MainContent>
    </>
  );
}
