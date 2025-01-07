import http from '../http';
import { GetEventsOutput } from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';

export interface EventDisplay extends GetEventsOutput {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  rsvpDeadlineDate: string;
  rsvpDeadlineTime: string;
}

export const getEvents = async () => {
  const res = await http.get<GetEventsOutput[]>('apis/v1/event');

  if (res?.data) {
    return res?.data;
  }
};
