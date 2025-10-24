interface Event {
  id: number;
  title: string;
  startDateTime: string;
  image: string;
  description: string;
  rsvpLink: string;
}

export const classifyEvents = (events: Event[]) => {
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
