'use client';

import { useRouter } from 'next/navigation';
import * as S from './page.styled';

export default function Home() {
  const { push } = useRouter();

  return (
    <>
      <S.MainContent className="flex flex-col min-h-screen space-y-10 place-content-center">
        <div id="loginHeader" className="font-semibold text-center">
          <h1 className="text-orange-900 text-2xl">AKCSE MANITOBA</h1>
          <h1 className="text-orange-900 text-base">Young Generations</h1>
        </div>

        <div id="btns" className="space-y-5">
          <div className="font-mono flex justify-center">
            <button
              className="bg-orange-900 hover:bg-orange-800 text-white py-2 px-4 rounded"
              onClick={() => push('/')}
            >
              HOME
            </button>
          </div>
          <div className="font-mono flex justify-center">
            <button
              className="bg-orange-900 hover:bg-orange-800 text-white py-2 px-4 rounded"
              onClick={() => push('/')}
            >
              EVENTS
            </button>
          </div>
          <div className="font-mono flex justify-center">
            <button
              className="bg-orange-900 hover:bg-orange-800 text-white py-2 px-4 rounded"
              onClick={() => push('/')}
            >
              RESOURCES
            </button>
          </div>
          <div className="font-mono flex justify-center">
            <button
              className="bg-orange-900 hover:bg-orange-800 text-white py-2 px-4 rounded"
              onClick={() => push('/')}
            >
              LEADERBOARD
            </button>
          </div>
          <div className="font-mono flex justify-center">
            <button
              className="bg-orange-900 hover:bg-orange-800 text-white py-2 px-4 rounded"
              onClick={() => push('/login')}
            >
              LOG IN / ADMIN
            </button>
          </div>
        </div>
      </S.MainContent>
    </>
  );
}
