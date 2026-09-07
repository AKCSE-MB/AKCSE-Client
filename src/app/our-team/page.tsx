import { getTeam } from '@/apis/executives/mapper';
import { QUERY_KEYS } from '@/apis/queryKeys';
import getQueryClient from '@/lib/react-query/getQueryClient';
import Hydrate from '@/lib/react-query/hydrate.client';
import { dehydrate } from '@tanstack/react-query';
import OurTeamContent from './OurTeamContent';

/**
 * API 에서 받아온 데이터라 빌드 시점에 굳으면 안 된다. 60초 ISR 로 주기적으로 다시 만든다.
 * 매 요청마다 최신이 필요하면 `export const dynamic = 'force-dynamic'` 으로 바꾼다.
 */
export const revalidate = 60;

export default async function OurTeam() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.executives,
    queryFn: getTeam,
  });

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <OurTeamContent />
    </Hydrate>
  );
}
