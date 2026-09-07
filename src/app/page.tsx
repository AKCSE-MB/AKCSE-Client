import { getEvents } from '@/apis/events/mapper';
import { getTeam } from '@/apis/executives/mapper';
import { QUERY_KEYS } from '@/apis/queryKeys';
import getQueryClient from '@/lib/react-query/getQueryClient';
import Hydrate from '@/lib/react-query/hydrate.client';
import { dehydrate } from '@tanstack/react-query';
import HomeContent from './HomeContent';

/**
 * API 에서 받아온 데이터라 빌드 시점에 굳으면 안 된다. 60초 ISR 로 주기적으로 다시 만든다.
 * 매 요청마다 최신이 필요하면 `export const dynamic = 'force-dynamic'` 으로 바꾼다.
 */
export const revalidate = 60;

export default async function Home() {
  const queryClient = getQueryClient();

  // 홈은 이벤트 섹션과 팀 캐러셀을 함께 그리므로 둘 다 미리 받아둔다.
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.events,
      queryFn: getEvents,
    }),
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.executives,
      queryFn: getTeam,
    }),
  ]);

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <HomeContent />
    </Hydrate>
  );
}
