import http from '@/apis/http';
import { BaseResponse, ExecutiveResponse } from '@/types';

export const executiveKeys = {
  all: ['executives'] as const,
};

export async function getExecutives() {
  const body =
    await http.get<BaseResponse<ExecutiveResponse[]>>('/v1/executives');
  return body.data;
}
