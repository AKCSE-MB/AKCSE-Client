import http from '../http';
import {
  EventDetails,
  GetEventsOutput,
} from '@dev-taeho/akcse_mb/lib/domain/event/dto/event.dto';

export const getEvents = async () => {
  const res = await http.get<GetEventsOutput>('/apis/v1/event');

  if (res?.data) {
    return res?.data;
  }
};

export const getPastEvents = async () => {
  const res = await http.get<EventDetails[]>('/apis/v1/event/past');

  if (res?.data) {
    return res?.data;
  }
};

export const getEventById = async (id: number) => {
  const res = await http.get<EventDetails>(`/apis/v1/event/${id}`);

  if (res?.data) {
    return res?.data;
  }
};
