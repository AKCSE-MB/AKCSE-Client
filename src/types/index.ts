export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
}

export interface Event {
  id: number;
  title: string;
  startDateTime: string;
  image: string;
  description: string;
  rsvpLink?: string;
}
