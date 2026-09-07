import { executiveKeys, getExecutives } from '@/apis/executives';
import { useQuery } from '@tanstack/react-query';

export function useExecutives() {
  const { data, ...rest } = useQuery({
    queryKey: executiveKeys.all,
    queryFn: getExecutives,
  });

  return { executives: data ?? [], ...rest };
}
