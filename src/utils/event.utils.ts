import { EventResponse } from '@/types';

export const classifyEvents = (events: EventResponse[]) => {
  const now = new Date();

  const upcoming = events
    .filter((event) => new Date(event.startDateTime) >= now)
    .sort(
      (a, b) =>
        new Date(a.startDateTime).getTime() -
        new Date(b.startDateTime).getTime(),
    );

  const past = events
    .filter((event) => new Date(event.startDateTime) < now)
    .sort(
      (a, b) =>
        new Date(b.startDateTime).getTime() -
        new Date(a.startDateTime).getTime(),
    );

  return { upcoming, past };
};
