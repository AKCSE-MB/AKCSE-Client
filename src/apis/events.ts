import http from '@/apis/http';
import { BaseResponse, EventResponse } from '@/types';

export const eventKeys = {
  all: ['events'] as const,
};

export async function getEvents() {
  const body = await http.get<BaseResponse<EventResponse[]>>('/v1/events');
  return body.data;
}
