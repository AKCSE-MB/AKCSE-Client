/**
 * TanStack Query 키를 한곳에 모아둔다. 서버 prefetch 와 클라이언트 useQuery 가
 * 반드시 같은 키를 써야 하이드레이션이 맞물리므로 문자열을 흩뿌리지 않는다.
 */
export const QUERY_KEYS = {
  events: ['events'] as const,
  executives: ['executives'] as const,
};
