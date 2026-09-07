import { eventKeys, getEvents } from '@/apis/events';
import { useQuery } from '@tanstack/react-query';

export function useEvents() {
  const { data, ...rest } = useQuery({
    queryKey: eventKeys.all,
    queryFn: getEvents,
  });

  return { events: data ?? [], ...rest };
}
