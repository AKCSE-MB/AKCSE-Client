import http from '@/apis/http';

/** Mirrors `EventResponseDto` in AKCSE-Server (GET /v1/events). */
export interface EventResponseDto {
  id: number;
  title: string;
  description: string;
  /** Event fee in CAD, 0 for free events. */
  fee: number;
  /** ISO 8601 string. */
  startDateTime: string;
  endDateTime: string;
  location: string;
  signUpDeadline: string;
  /** Empty string when not set. */
  rsvpLink: string;
  /** Empty string when not set. */
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const eventsRepository = () => {
  return {
    /** 시작일 오름차순으로 정렬된 전체 이벤트. */
    getEvents: async (): Promise<EventResponseDto[]> => {
      return await http.get('/apis/v1/events');
    },
  };
};

export default eventsRepository;
